import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import { cnpjMask } from '../../Mascara/mask'

function PetShop() {
  //history: é usado para mandar informações com state e nos encaminhar para a tela desejada com o pathname
  const history = useHistory();
  //location: através do location pegamos os dados mandados pelo state do history da tela anterior
  const location = useLocation();
  //states: pegamos o valor atual armazenado nele
  const [plano, setPlano] = useState('');
  const [cnpj, setCnpj] = useState('');

  /*useEffect: assim que a página for renderizada pegamos o plano escolhido que foi 
  mandado da página anterior e colocamos esse valor no state plano*/
  useEffect(() => {
    setPlano(location.state.plano_escolhido);
  }, [location]);

  /* useForm: pegamos as funções de register, handleSubmit, errors, 
  que servem respectivamente para registrar o input, validar os dados
  antes de invocar o onsubmit, e caso o register peça algo no input e não for cumprido o errors vai apontar o erro.
  */
  const { register, handleSubmit, errors } = useForm();

  /*função onSubmit: verifica os dados inseridos no form, 
  se tiver algum vazio ele retorna campos nulos, se as senhas inseridas forem diferentes retorna senhas diferentes, 
  seo cnpj estiver incompleto retorna cnpj incompleto,
  estando todos os campos preenchidos manda os dados para a página etapa2, onde continua o cadastro.
  */
  function onSubmit(data) {
    if (
      data.nome === '' ||
      data.cnpj === '' ||
      data.email === '' ||
      data.senha === '' ||
      data.confirmsenha === ''
    ) {
      alert('Campos nulos!');
    } else if (data.senha !== data.confirmsenha) {
      alert('Senhas diferentes');
    } else if (cnpj.length < 18) {
      alert('CNPJ incompleto!')
    } else {
      history.push({
        pathname: '/Etapa2',
        state:
        {
          nome: data.nome,
          cnpj: data.cnpj,
          email: data.email,
          senha: data.senha,
          plano: plano
        }
      });
    }
  }

  function cnpjMascara(e) {
    setCnpj(cnpjMask(e.target.value))
  }
  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2>Cadastre-se aqui</h2>
        <input
          type="text"
          name="nome"
          id="nome"
          placeholder="Nome"
          ref={register}
        />
        <input
          type="text"
          name="cnpj"
          id="cnpj"
          placeholder="CNPJ"
          ref={register}
          value={cnpj}
          onChange={cnpjMascara}
          maxLength='18'
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          ref={register({
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Insira um E-mail válido!',
            },
          })}
        />
        <input
          type="password"
          name="senha"
          id="senha"
          placeholder="Senha"
          ref={register}
        />
        <input
          type="password"
          name="confirmsenha"
          id="confirmsenha"
          placeholder="Confirmação de Senha"
          ref={register}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <button type="submit"> Cadastrar </button>
      </form>
    </Container>
  );
}

export default PetShop;
