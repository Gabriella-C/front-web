import React, { useEffect, useState } from 'react';
import HeaderLateral from '../../components/HeaderLateral';
import { useHistory, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Container, ImageInput } from './styles';
import axios from 'axios';
import { cnpjMask, celularMask, telefoneMask, moedaMask } from '../../Mascara/mask';

function Perfil() {
  const history = useHistory();
  const location = useLocation();
  const { register, handleSubmit, errors, reset } = useForm();
  const [idempresa, setIdEmpresa] = useState('');
  const [preview, setPreview] = useState('');
  const [nome, setNome] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confSenha, setConfSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [celular, setCelular] = useState('');
  const [plano_escolhido, setPlano_Escolhido] = useState('');
  const [plano_basico, setPlano_Basico] = useState(false);
  const [plano_intermed, setPlano_Intermed] = useState(false);
  const [plano_avanc, setPlano_Avanc] = useState(false);
  const [foto_perfil, setFoto_Perfil] = useState('');
  const [frete, setFrete] = useState('');

  useEffect(() => {
    let id = location.state.id;
    setIdEmpresa(location.state.id);
    axios.post('http://localhost:3333/Company', { 'idempresa': id })
      .then(
        res => {
          console.log(res.data[0]);
          setNome(res.data[0].nome);
          setCnpj(res.data[0].cnpj);
          setEmail(res.data[0].email);
          setSenha(res.data[0].senha);
          setConfSenha(res.data[0].senha);
          setTelefone(res.data[0].telefone);
          setCelular(res.data[0].celular);
          setPlano_Escolhido(res.data[0].plano_escolhido);

          if (res.data[0].plano_escolhido === 'Básico') {
            setPlano_Basico(true);
          } else if (res.data[0].plano_escolhido === 'Intermediário') {
            setPlano_Intermed(true);
          } else if (res.data[0].plano_escolhido === 'Avançado') {
            setPlano_Avanc(true);
          }

          setFoto_Perfil(res.data[0].foto_perfil);

          if (res.data[0].foto_perfil !== null) {
            setPreview('http://localhost:3333/uploads/company/save/' + res.data[0].foto_perfil)
          }

          setFrete(res.data[0].frete);
        }
      );
  }, []);




  async function handleChange(e) {
    const data = new FormData();
    var nomefoto = '';
    var arquivo = '';
    data.append('temp', e.target.files[0]);
    console.log(e.target.files[0]);
    if (foto_perfil === 'null' || foto_perfil === null || foto_perfil === '') {
      console.log(foto_perfil);
      nomefoto = 'empresa_' + idempresa;
      console.log(nomefoto);
    } else {
      await axios.post('http://localhost:3333/DelTempComp', { "file": foto_perfil });
      console.log('teste' + foto_perfil);
      var fotoNome = foto_perfil.split(".");
      nomefoto = fotoNome[0];
      arquivo = fotoNome[1];
    }
    console.log('to aqui' + nomefoto);
    const response = await axios.post('http://localhost:3333/CompTemp' + nomefoto, data);
    const { url } = response.data;
    setPreview(url);
  }

  async function saveImg(fotoArquivo) {
    const data = new FormData();
    var nomefoto = '';
    var arquivo = '';
    data.append('img', fotoArquivo);
    if (foto_perfil === 'null' || foto_perfil === null || foto_perfil === '') {
      console.log(foto_perfil);
      nomefoto = 'empresa_' + idempresa;
      console.log(nomefoto);
    } else {
      await axios.post('http://localhost:3333/DelSaveComp', { "file": foto_perfil });
      console.log('teste' + foto_perfil);
      var fotoNome = foto_perfil.split(".");
      nomefoto = fotoNome[0];
      arquivo = fotoNome[1];
    }
    console.log(nome);
    const response = await axios.post('http://localhost:3333/CompImg' + nomefoto, data);
    console.log(response.data);
    const { img } = response.data;
    return img;
  }

  function onSubmit(data) {
    const fotoArquivo = data.company[0];
    console.log(fotoArquivo);
    if (
      data.nome === '' ||
      data.email === '' ||
      data.cnpj === '' ||
      data.senha === '' ||
      data.confSenha === '' ||
      data.plano === '0' ||
      data.celular === '' ||
      data.frete === ''
    ) {
      alert('Apenas Telefone não é obrigatório!');
    } else if (data.senha !== data.confsenha) {
      alert('Senhas diferentes')
    } else {
      axios.post('http://localhost:3333/Company_Update',
        {
          "idempresa": idempresa,
          "nome": data.nome,
          "cnpj": data.cnpj,
          "email": data.email,
          "senha": data.senha,
          "telefone": data.telefone,
          "celular": data.celular,
          "plano": data.plano,
          "frete": data.frete,
        }).then(
          res => {
            if (fotoArquivo == null || fotoArquivo == 'undefined' || fotoArquivo == '' || fotoArquivo == [] || fotoArquivo == 'null') {
              alert('Perfil alterado com sucesso!!');
              clear();
              history.push({ pathname: '/Pedido', state: { id: idempresa } });
            } else {
              saveImg(fotoArquivo).then(
                res => {
                  if (res !== 'undefined' || res !== '') {
                    axios.post('http://localhost:3333/Company_Photo_Update', { "idempresa": idempresa, "foto": res })
                      .then(
                        alert('Perfil alterado com sucesso!!'),
                        clear(),
                        history.push({ pathname: '/Pedido', state: { id: idempresa } })
                      ).catch(e => alert('ocorreu um erro: ' + e))
                  } else {
                    alert('ocorreu um erro, com a imagem, volte para tela anterior, depois vá em perfil e atualize a imagem');
                  }
                }
              )
            }
          }
        ).catch(e => { alert('Erro ao atualizar, tente novamente!') });
      function clear() {
        reset({
          plano: '0'
        });
        setNome('');
        setSenha('');
        setConfSenha('');
        setEmail('');
        setFrete('');
        setPreview('');
        setTelefone('');
        setCelular('');
        setCnpj('');
        setFoto_Perfil('');
      }
    }
  }

  return (
    <>
      <HeaderLateral empresa={idempresa} />
      < Container >
        <form>
          <h2>Perfil</h2>
          <ImageInput>
            <label htmlFor="company">
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
                id="company"
                name="company"
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
            value={nome}
            onChange={e => {
              setNome(e.target.value)
            }}
          />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="E-mail"
            ref={register({
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Insira um E-mail válido!',
              },
            })}
            value={email}
            onChange={e => {
              setEmail(e.target.value)
            }}
          />
          <input
            type="text"
            name="cnpj"
            id="cnpj"
            placeholder="CNPJ"
            ref={register}
            maxLength='18'
            value={cnpj}
            onChange={e => {
              setCnpj(cnpjMask(e.target.value))
            }}
          />
          <input
            type="password"
            name="senha"
            id="senha"
            placeholder="Senha"
            ref={register}
            value={senha}
            onChange={e => {
              setSenha(e.target.value)
            }}
          />
          <input
            type="password"
            name="confsenha"
            id="confsenha"
            placeholder="Confirme a senha"
            ref={register}
            value={confSenha}
            onChange={e => {
              setConfSenha(e.target.value)
            }}
          />
          <input
            type="text"
            name="telefone"
            id="telefone"
            placeholder="Telefone"
            ref={register}
            maxLength='15'
            value={telefone}
            onChange={e => {
              setTelefone(telefoneMask(e.target.value))
            }}
          />
          <input
            type="text"
            name="celular"
            id="celular"
            placeholder="Celular"
            ref={register}
            maxLength='16'
            value={celular}
            onChange={e => {
              setCelular(celularMask(e.target.value))
            }}
          />
          <input
            type="text"
            name="frete"
            id="frete"
            placeholder="Frete"
            ref={register}
            value={frete}
            maxLength='5'
            onChange={e => {
              setFrete(moedaMask(e.target.value))
            }}
          />
          <label className='gratuito'>Se frete for gratuito, coloque o valor 0</label>
          <div className='plano'>
            <label>Plano:</label>
            <select name='plano' id='plano' ref={register}>
              <option value='0' key='0'>
                Escolher
            </option>
              <option value='Básico' key='Básico' selected={plano_basico}>
                Básico
            </option>
              <option value='Intermediário' key='Intermediário' selected={plano_intermed}>
                Intermediário
            </option>
              <option value='Avançado' key='Avançado' selected={plano_avanc}>
                Avançado
            </option>
            </select>
          </div>
          {errors.email && <p>{errors.email.message}</p>}
          <div className='divButton'>
            <button onClick={handleSubmit(onSubmit)}>Atualizar</button>
            <button onClick={() => { history.push({ pathname: '/Endereco', state: { id: idempresa } }) }}>Atualizar Endereço</button>
          </div>
        </form>
      </Container>
    </>
  );
}

export default Perfil;
