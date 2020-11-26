import React from 'react';
import { Container } from './styles';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Login() {
  /* useForm: pegamos as funções de register, handleSubmit, errors, 
  que servem respectivamente para registrar o input, validar os dados
  antes de invocar o onsubmit, e caso o register peça algo no input e não for cumprido o errors vai apontar o erro.
  */
  const { register, handleSubmit, errors } = useForm();
  //history: é usado para mandar informações com state e nos encaminhar para a tela desejada com o pathname
  const history = useHistory();

  /*função onSubmit: verifica os dados inseridos no form, 
  se tiver algum vazio ele retorna campos nulos, estando todos os
  campos preenchidos manda os dados para a nossa API, onde é mandado para o banco,
  para verificar se existe esse usuário. Existindo o usuário ele é mandado para tela de pedidos,
  caso contrário é informado que ou o usuário é inválido ou a senha é inválida.
  */
  function onSubmit(data) {
    if (data.email === '' || data.senha === '') {
      alert('Campos nulos');
    } else {
      axios.post('http://localhost:3333/Login_Empresa', { 'Email': data.email, 'Pass': data.senha }).then(
        response => {
          if (response.data.Erro === 'Não localizado #115988' || response.data.Login_Status === 'invalido') {
            alert('Usuário ou senha inválida!');
          } else {
            history.push({
              pathname: '/Pedido',
              state: { id: response.data[0].idempresa }
            });
          }
        }
      );
    }
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2>Login</h2>
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
        {errors.email && <p>{errors.email.message}</p>}
        <input
          type="password"
          name="senha"
          id="senha"
          placeholder="Senha"
          ref={register}
        />
        <button type="submit">Entrar</button>
      </form>
    </Container>
  );
}

export default Login;
