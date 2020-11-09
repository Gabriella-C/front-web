import React from 'react';
import { Container } from './styles';
import { useForm } from "react-hook-form";

function Login() {

  const { register, handleSubmit, errors } = useForm();

  function onSubmit(data) {
    if (data.email === 'tassi@teste.com' && data.senha === 'teste') {
      alert('pode entrar');
    } else if (data.email === '' || data.senha === '') {
      alert('Campos nulos');
    } else {
      alert('Usuário ou senha inválida');
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
              message: "Insira um E-mail válido!",
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
