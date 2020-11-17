import React from 'react';
import { Container } from './styles';
import ImageInput from '../../components/ImageInput';
import HeaderLateral from '../../components/HeaderLateral';

function Produto() {
  return (
    <Container>
      <div>
        <h3> Cadastro de Produto</h3>
        <form>
          <ImageInput />
          <input type="text" name="nome" id="nome" placeholder="Nome" />
          <input type="date" name="data" id="data" placeholder="Validade" />
          <input type="text" name="valor" id="valor" placeholder="Valor" />
          <input type="text" name="marca" id="marca" placeholder="Marca" />
          <input type="text" name="peso" id="peso" placeholder="Peso" />

          <input
            type="text"
            name="unidMed"
            id="unidMed"
            placeholder="Unidade de Medida"
          />
          <input
            type="text"
            name="descricao"
            id="descricao"
            placeholder="Descrição de Produto"
          />
        </form>
        <button>Cadastrar</button>
      </div>
    </Container>
  );
}

export default Produto;
