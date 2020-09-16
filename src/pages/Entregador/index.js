import React from 'react';
import { Container } from './styles';

function Entregador() {
  return (
    <Container>
      <form>
        <h2>Cadastre-se aqui</h2>
        <input type="text" name="nome" id="nome" placeholder="Nome" />
        <div>
          <input type="text" name="cpf" id="cpf" placeholder="CPF" />
          <input type="date" name="dateNas" id="dateNas" />
        </div>
        <input type="email" name="email" id="email" placeholder="Email" />
        <input type="password" name="senha" id="senha" placeholder="Senha" />
        <input
          type="password"
          name="confirmsenha"
          id="confirmsenha"
          placeholder="Confirmação de Senha"
        />
        <button>Cadastrar</button>
      </form>
    </Container>
  );
}

export default Entregador;
