import React from 'react';
import { Container } from './styles';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

function PetShop() {
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
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
    } else {
      console.log(data);
    }
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
        <button onClick={() => history.push('/Etapa2')} type="submit">
          Cadastrar
        </button>
      </form>
    </Container>
  );
}

export default PetShop;
