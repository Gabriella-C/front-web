import React from 'react';
import { Container } from './styles';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Login() {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

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
