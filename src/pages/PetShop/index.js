import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';

function PetShop() {
  const history = useHistory();
  const location = useLocation();
  const [plano, setPlano] = useState('');

  useEffect(() => {
    setPlano(location.state.plano_escolhido);
  }, [location]);

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
        {errors.email && <p>{errors.email.message}</p>};
        <button type="submit"> Cadastrar </button>
      </form>
    </Container>
  );
}

export default PetShop;
