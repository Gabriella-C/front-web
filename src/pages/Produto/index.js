import React, { useState, useEffect } from 'react';
import { Container, ImageInput } from './styles';
import HeaderLateral from '../../components/HeaderLateral';
import { useLocation } from 'react-router-dom';
import { moedaMask, soLetraMask, pesoMask, numeroMask, dataMask } from '../../Mascara/mask';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function Produto() {
  const location = useLocation();
  const [empresa, setEmpresa] = useState('');
  const [valor, setValor] = useState('');
  const [um, setUm] = useState('');
  const [peso, setPeso] = useState('');
  const [preview, setPreview] = useState('');
  const [ultimoProd, setUltimoProd] = useState('');
  const [categoria, setCategoria] = useState([]);
  const [especie, setEspecie] = useState([]);
  const [raca, setRaca] = useState([]);
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    let id = location.state.id;
    setEmpresa(id);
    axios
      .post('http://localhost:3333/Last_Product', { id: id })
      .then((res) => {
        setUltimoProd(res.data[0].max);
      })
      .catch((e) => {
        alert('Erro inesperado, tente novamente recarregando a página');
      });

    axios
      .get('http://localhost:3333/Category')
      .then((res) => {
        setCategoria(res.data);
      })
      .catch((e) => {
        alert('Erro inesperado, tente novamente recarregando a página');
      });

    axios
      .get('http://localhost:3333/Species')
      .then((res) => {
        setEspecie(res.data);
      })
      .catch((e) => {
        alert('Erro inesperado, tente novamente recarregando a página');
      });
  }, [location]);

  async function handleChange(e) {
    const data = new FormData();
    const idprod = ultimoProd + 1;
    data.append('temp', e.target.files[0]);
    const response = await axios.post('http://localhost:3333/ProdTempproduto' + idprod + '_' + empresa, data);
    const { url } = response.data;

    setPreview(url);
  }

  async function saveImg(foto, ultimoProdid) {
    const data = new FormData();
    data.append('img', foto);
    const response = await axios.post('http://localhost:3333/ProdImgproduto' + ultimoProdid + '_' + empresa, data);

    const { img } = response.data;
    return img;
  }

  async function handleSpecie(e) {
    const id_specie = e.target.value;
    axios
      .post('http://localhost:3333/Breed', { id_species: id_specie })
      .then((res) => {
        setRaca(res.data);
      });
  }

  function onSubmit(data) {
    const foto = data.product[0];
    if (
      data.nome === '' ||
      data.valor === '' ||
      data.peso === '' ||
      data.unidMed === '' ||
      data.raca === '' ||
      data.categoria === '0' ||
      data.especie === '0'
    ) {
      alert(
        'Somente os campos validade, descrição, marca e foto não são obrigatórios'
      );
    } else {
      axios.post('http://localhost:3333/Product_Create',
        {
          "nome": data.nome,
          "validade": dataMask(data.data),
          "preco": numeroMask(data.valor),
          "empresa": empresa,
          "marca": data.marca,
          "peso": numeroMask(data.peso),
          "descricao": data.descricao,
          "um": data.unidMed
        }).then(
          axios.post('http://localhost:3333/Last_Product', { 'id': empresa })
            .then(
              res => {
                const ultimoProdid = res.data[0].max;
                axios.post('http://localhost:3333/Category_Create',
                  {
                    "categoria": data.categoria,
                    "produto": res.data[0].max,
                    "raca": data.raca
                  }).then(
                    res => {
                      saveImg(foto, ultimoProdid).then(
                        res => {
                          if (res !== 'undefined' || res !== '') {
                            axios.post('http://localhost:3333/Product_Update_Photo', { "id": empresa, "foto": res, "idprod": ultimoProdid })
                              .then(
                                alert('Produto cadastrado com sucesso!!'),
                                clear()
                              ).catch(e => alert('ocorreu um erro: ' + e))
                          } else {
                            alert('ocorreu um erro, com a imagem, vá aos produtos cadastrados e atualize a imagem do último produto cadastrado');
                          }
                        }
                      )
                    }
                  ).catch(
                    e => {
                      alert("Erro inesperado, tente novamente recarregando a página " + e);
                    }
                  )
              }
            ).catch(e => {
              alert('Erro inesperado, tente novamente recarregando a página a ' + e);
            })

        ).catch(e => { alert('Erro ao cadastrar, tente novamente!') });
      function clear() {
        reset({
          nome: '',
          data: '',
          marca: '',
          descricao: '',
          categoria: '0',
          especie: '0'
        });
        setRaca([]);
        setValor('');
        setPeso('');
        setUm('');
        setPreview('');
      }
    }
  }
  return (
    <>
      <HeaderLateral empresa={empresa} />
      <Container>
        <div>
          <h3> Cadastro de Produto</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ImageInput>
              <label htmlFor="product">
                <img
                  name="img"
                  src={
                    preview ||
                    'https://madeirasgasometro.vteximg.com.br/arquivos/ids/168849-1000-1000/mdf-cinza-sagrado-essencial-imagem-01.jpg?v=636655430222730000'
                  }
                  alt=""
                  ref={register}
                />
                <input
                  type="file"
                  id="product"
                  name="product"
                  accept="image/*"
                  onChange={handleChange}
                  ref={register}
                />
              </label>
            </ImageInput>
            <input
              type="text"
              name="nome"
              id="nome"
              placeholder="Nome"
              ref={register}
            />
            <div className="dataCategoriaEspecie">
              <label className="data">Validade: </label>
              <input
                type="date"
                name="data"
                id="data"
                placeholder="Validade"
                ref={register}
              />
            </div>
            <input
              type="text"
              name="valor"
              id="valor"
              placeholder="Valor"
              value={valor}
              onChange={(event) => {
                setValor(moedaMask(event.target.value));
              }}
              maxLength="9"
              ref={register}
            />
            <input
              type="text"
              name="marca"
              id="marca"
              placeholder="Marca"
              ref={register}
            />
            <input
              type="text"
              name="peso"
              id="peso"
              placeholder="Peso"
              ref={register}
              value={peso}
              onChange={(event) => {
                setPeso(pesoMask(event.target.value));
              }}
              maxLength="6"
            />

            <input
              type="text"
              name="unidMed"
              id="unidMed"
              placeholder="Unidade de Medida"
              ref={register}
              maxLength="2"
              value={um}
              onChange={(event) => {
                setUm(soLetraMask(event.target.value));
              }}
            />
            <textarea
              type="text"
              name="descricao"
              id="descricao"
              placeholder="Descrição de Produto"
              ref={register}
            />
            <div className="dataCategoriaEspecie">
              <label>Categoria: </label>
              <select name="categoria" id="categoria" ref={register}>
                <option value="0" key="0">
                  Escolher
                </option>
                {categoria.map(({ idcategoria, nome_categoria }) => (
                  <option value={idcategoria} key={idcategoria}>
                    {nome_categoria}
                  </option>
                ))}
              </select>
            </div>
            <div className="dataCategoriaEspecie">
              <label>Espécie: </label>
              <select
                name="especie"
                id="especie"
                ref={register}
                onChange={handleSpecie}
              >
                <option value="0" key="0">
                  Escolher
                </option>
                {especie.map(({ idespecie, nome_especie }) => (
                  <option value={idespecie} key={idespecie}>
                    {nome_especie}
                  </option>
                ))}
              </select>
            </div>
            <div className="dataCategoriaEspecie">
              <label>Raça: </label>
              <select name="raca" id="raca" ref={register}>
                {raca.map(({ idraca, nome_raca }) => (
                  <option value={idraca} key={idraca}>
                    {nome_raca}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </Container>
    </>
  );
}

export default Produto;
