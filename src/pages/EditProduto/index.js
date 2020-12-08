import React, { useEffect, useState } from 'react';
import { Container, ImageInput } from './styles';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { moedaMask, soLetraMask, dataMask, numeroMask } from '../../Mascara/mask';

function EditProduto() {
  const location = useLocation();
  const history = useHistory();
  const { register, handleSubmit, reset } = useForm();
  const [empresa, setEmpresa] = useState('');
  const [idprod, setIdprod] = useState('');
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [valor, setValor] = useState('');
  const [marca, setMarca] = useState('');
  const [peso, setPeso] = useState('');
  const [um, setUm] = useState('');
  const [desc, setDesc] = useState('');
  const [status, setStatus] = useState(false);
  const [statusLabel, setStatusLabel] = useState('');
  const [foto, setFoto] = useState('');
  const [preview, setPreview] = useState('');
  const [categoria, setCategoria] = useState([]);
  const [especie, setEspecie] = useState([]);
  const [raca, setRaca] = useState([]);
  const [dadoscatAtu, setDadosCatAtu] = useState([]);
  const [hide, setHide] = useState(false);
  const [disable, setDisable] = useState(false);
  const [select, setSelect] = useState(true);
  const [contador, setContador] = useState(0);

  useEffect(() => {
    let idproduto = location.state.idprod;
    let id_specie = '';
    console.log('fotourl: ' + location.state.preview);
    setEmpresa(location.state.empresa);
    setIdprod(location.state.idprod);
    setNome(location.state.nome);
    setData(location.state.data);
    setValor(location.state.valor);
    setMarca(location.state.marca);
    setPeso(location.state.peso);
    setUm(location.state.um);
    setDesc(location.state.desc);
    setStatus(location.state.status);
    setStatusLabel(location.state.statusLabel);
    setFoto(location.state.foto);
    setPreview(location.state.preview);
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

    axios
      .post('http://localhost:3333/Category_Current', { "idproduto": idproduto })
      .then((res) => {
        setDadosCatAtu(res.data[0]);
        id_specie = res.data[0].especie_id_raca;
        axios
          .post('http://localhost:3333/Breed', { id_species: id_specie })
          .then((res) => {
            setRaca(res.data);
          });
      }).catch((e) => {
        alert('Erro inesperado, tente novamente recarregando a página');
      });
  }, [])

  function alteraStatus() {
    if (status === true) {
      setStatus(false);
      setStatusLabel('indisponível')
    } else {
      setStatus(true);
      setStatusLabel('disponível');
    }
  }

  async function handleChange(e) {
    const data = new FormData();
    data.append('temp', e.target.files[0]);
    await axios.post('http://localhost:3333/DelTempProd', { "file": foto });
    let fotoNome = foto.split(".");
    let nome = fotoNome[0];
    let arquivo = fotoNome[1];
    const response = await axios.post('http://localhost:3333/ProdTemp' + nome, data);
    const { url } = response.data;
    setPreview(url);
  }

  async function saveImg(fotoArquivo) {
    const data = new FormData();
    data.append('img', fotoArquivo);
    await axios.post('http://localhost:3333/DelSaveProd', { "file": foto });
    let fotoNome = foto.split(".");
    let nome = fotoNome[0];
    let arquivo = fotoNome[1];
    console.log(nome);
    const response = await axios.post('http://localhost:3333/ProdImg' + nome, data);
    console.log(response.data);
    const { img } = response.data;
    return img;
  }


  async function handleSpecie(e) {
    const id_specie = e.target.value;
    setContador(1);
    setHide(true);
    setDisable(true);
    setSelect(false);
    categoriaCompleta();
    especieCompleta();
    racaCompleta(id_specie);
    axios
      .post('http://localhost:3333/Breed', { id_species: id_specie })
      .then((res) => {
        setRaca(res.data);
      });
  }

  async function categoriaCompleta() {
    let countCat = 0;
    let existeCat = false;
    while (countCat <= categoria.length && contador == 0) {
      if (countCat === categoria.length) {
        categoria.splice(dadoscatAtu.categoria_id_cat_prod - 1, 0, { idcategoria: dadoscatAtu.categoria_id_cat_prod, nome_categoria: dadoscatAtu.nome_categoria });
        break;
      }
      countCat++;
    }
  }

  async function especieCompleta() {
    let countEsp = 0;
    let existeEsp = false;
    while (countEsp <= especie.length && contador == 0) {
      if (countEsp === especie.length) {
        especie.splice(dadoscatAtu.especie_id_raca - 1, 0, { idespecie: dadoscatAtu.especie_id_raca, nome_especie: dadoscatAtu.nome_especie });
        break;
      }
      countEsp++;
    }
  }

  async function racaCompleta(id_especie) {
    let countRaca = 0;
    let existeRaca = false;
    if (id_especie === dadoscatAtu.especie_id_raca) {
      while (countRaca <= raca.length && contador == 0) {
        if (raca[countRaca] == 'undefined' || raca[countRaca] == null || raca[countRaca] == '' || raca[countRaca] == []) {

        } else {

          if (raca[countRaca].idraca == dadoscatAtu.raca_id_cat_prod && raca[countRaca].nome_raca == dadoscatAtu.nome_raca) {
            existeRaca = true;
            break;
          }
        }

        if (countRaca === raca.length) {
          raca.splice(dadoscatAtu.raca_id_cat_prod - 1, 0, { idraca: dadoscatAtu.raca_id_cat_prod, nome_raca: dadoscatAtu.nome_raca });
          break;
        }
        countRaca++;
      }
    } else {

    }
  }


  function onSubmit(data) {
    const fotoArquivo = data.product[0];
    console.log(fotoArquivo);
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
      console.log(statusLabel);
      axios.post('http://localhost:3333/Product_Update',
        {
          "idprod": idprod,
          "nome": data.nome,
          "validade": dataMask(data.data),
          "preco": numeroMask(data.valor),
          "empresa": empresa,
          "marca": data.marca,
          "peso": numeroMask(data.peso),
          "descricao": data.descricao,
          "um": data.unidMed,
          "status": statusLabel
        }).then(
          axios.post('http://localhost:3333/Category_Update',
            {
              "categoria": data.categoria,
              "produto": idprod,
              "raca": data.raca
            }).then(
              res => {
                if (fotoArquivo == null || fotoArquivo == 'undefined' || fotoArquivo == '' || fotoArquivo == []) {
                  alert('Produto alterado com sucesso!!');
                  clear();
                  history.push({ pathname: '/ListaProd', state: { id: empresa } });
                } else {
                  saveImg(fotoArquivo).then(
                    res => {
                      if (res !== 'undefined' || res !== '') {
                        axios.post('http://localhost:3333/Product_Update_Photo', { "id": empresa, "foto": res, "idprod": idprod })
                          .then(
                            alert('Produto alterado com sucesso!!'),
                            clear(),
                            history.push({ pathname: '/ListaProd', state: { id: empresa } })
                          ).catch(e => alert('ocorreu um erro: ' + e))
                      } else {
                        alert('ocorreu um erro, com a imagem, vá aos produtos cadastrados e atualize a imagem do último produto cadastrado');
                      }
                    }
                  )
                }
              }
            ).catch(
              e => {
                alert("Erro inesperado, tente novamente recarregando a página " + e);
              }
            )
        ).catch(e => { alert('Erro ao atualizar, tente novamente!') });
      function clear() {
        reset({
          categoria: '0',
          especie: '0',
          raca: '0'
        });
        setData('');
        setRaca([]);
        setValor('');
        setPeso('');
        setUm('');
        setPreview('');
        setIdprod('');
        setDesc('');
        setMarca('');
        setNome('');
      }
    }
  }

  var i = 0;
  while (i < categoria.length && contador == 0) {
    if (categoria[i].idcategoria == dadoscatAtu.categoria_id_cat_prod && categoria[i].nome_categoria == dadoscatAtu.nome_categoria) {
      categoria.splice(i, 1);
      break;
    }
    i++;
  }

  var j = 0;
  while (j < especie.length && contador == 0) {
    if (especie[j].idespecie == dadoscatAtu.especie_id_raca && especie[j].nome_especie == dadoscatAtu.nome_especie) {
      especie.splice(j, 1);
      break;
    }
    j++;
  }

  var k = 0;
  while (k < raca.length && contador == 0) {
    if (raca[k].idraca == dadoscatAtu.raca_id_cat_prod && raca[k].nome_raca == dadoscatAtu.nome_raca) {
      raca.splice(k, 1);
      break;
    }
    k++;
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Atualização de Produto</h2>
        <div>
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

          <div className='status'>
            <div className='statusLabel'>
              <label>Status: </label>
              <label>{statusLabel}</label>
            </div>
            <button type='button' onClick={alteraStatus}>Mudar status</button>
          </div>
        </div>
        <input
          type="text"
          name="nome"
          id="nome"
          placeholder="Nome"
          ref={register}
          value={nome}
          onChange={e => {
            setNome(e.target.value);
          }}
        />
        <div>
          <h5 className="data">Validade: </h5>
          <input
            type="date"
            name="data"
            id="data"
            placeholder="Validade"
            ref={register}
            value={data}
            onChange={e => {
              setData(e.target.value);
            }}
          />
        </div>
        <input
          type="text"
          name="valor"
          id="valor"
          placeholder="Valor"
          ref={register}
          value={valor}
          onChange={e => {
            setValor(moedaMask(e.target.value));
          }}
        />
        <input
          type="text"
          name="marca"
          id="marca"
          placeholder="Marca"
          ref={register}
          value={marca}
          onChange={e => {
            setMarca(e.target.value)
          }}
        />
        <input
          type="text"
          name="peso"
          id="peso"
          placeholder="Peso"
          ref={register}
          value={peso}
          onChange={e => {
            setPeso(moedaMask(e.target.value));
          }}
        />
        <input
          type="text"
          name="unidMed"
          id="unidMed"
          placeholder="Unidade de Medida"
          maxLength="2"
          ref={register}
          value={um}
          onChange={e => {
            setUm(soLetraMask(e.target.value));
          }}
        />
        <textarea
          type="text"
          name="descricao"
          id="descricao"
          placeholder="Descrição de Produto"
          ref={register}
          value={desc}
          onChange={e => {
            setDesc(e.target.value);
          }}
        />
        <div className="dataCategoriaEspecie">
          <label>Categoria: </label>
          <select name="categoria" id="categoria" ref={register}>
            <option value='0' key='0'>
              Escolher
            </option>
            <option value={dadoscatAtu.categoria_id_cat_prod} key={dadoscatAtu.categoria_id_cat_prod} disabled={disable} hidden={hide} selected={select}>
              {dadoscatAtu.nome_categoria}
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
            <option value='0' key='0'>
              Escolher
            </option>
            <option value={dadoscatAtu.especie_id_raca} key={dadoscatAtu.especie_id_raca} disabled={disable} hidden={hide} selected={select}>
              {dadoscatAtu.nome_especie}
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
            <option value='0' key='0'>
              Escolher
            </option>
            <option value={dadoscatAtu.raca_id_cat_prod} key={dadoscatAtu.raca_id_cat_prod} disabled={disable} hidden={hide} selected={select}>
              {dadoscatAtu.nome_raca}
            </option>
            {raca.map(({ idraca, nome_raca }) => (
              <option value={idraca} key={idraca}>
                {nome_raca}
              </option>
            ))}
          </select>
        </div>
        <button>Atualizar</button>
      </form>
    </Container>
  );
}

export default EditProduto;
