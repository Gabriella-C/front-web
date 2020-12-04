import React from 'react';
import HeaderLateral from '../../components/HeaderLateral';

import { Container } from './styles';

function Perfil() {
  return (
    <>
      <HeaderLateral />
      <Container>
        <form>
          <h2>Perfil</h2>
          <input type="text" name="nome" id="nome" placeholder="Nome" />
          <input type="text" name="email" id="email" placeholder="E-mail" />
          <input type="text" name="cnpj" id="cnpj" placeholder="CNPJ" />
          <input type="passworld" name="senha" id="senha" placeholder="Senha" />
          <button>Atualizar</button>
        </form>
      </Container>
    </>
  );
}

export default Perfil;
