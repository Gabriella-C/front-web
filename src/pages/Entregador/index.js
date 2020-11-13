import React from 'react';
import { Container } from './styles';

function Entregador() {
  return (
    <Container>
      <h2>Cadastre-se aqui</h2>
      <form>
        <input type="text" name="nome" id="nome" placeholder="Nome" />
        <div>
          <input type="text" name="cpf" id="cpf" placeholder="CPF" />
          <input type="date" name="dateNas" id="dateNas" />
        </div>
        <input type="email" name="email" id="email" placeholder="Email" />
        <input type="password" name="senha" id="senha" placeholder="Senha" />
        <input
          type="text"
          name="celular"
          id="celular"
          placeholder="_______-_______"
        />

        <input type="text" name="cep" id="cep" placeholder="CEP" />
        <input type="text" name="estado" id="estado" placeholder="Estado" />
        <input type="text" name="bairro" id="bairro" placeholder="Bairro" />
        <input
          type="address"
          name="endereco"
          id="endereco"
          placeholder="Endereco"
        />
        <input type="text" name="numero" id="numero" placeholder="Numero" />
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
