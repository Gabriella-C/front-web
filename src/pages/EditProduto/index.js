import React from 'react';

import { Container } from './styles';

function EditProduto() {
  return (
    <Container>
      <form>
        <h2>Atualização de Pedido</h2>
        <input type="text" name="nome" id="nome" placeholder="Nome" />
        <div>
          <h5 className="data">Validade: </h5>
          <input type="date" name="data" id="data" placeholder="Validade" />
        </div>
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
        <button>Atualizar</button>
      </form>
    </Container>
  );
}

export default EditProduto;
