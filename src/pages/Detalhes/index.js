import React from 'react';
import { Container, Content } from './styles';

function Detalhes() {
  return (
    <Container>
      <Content>
        <div>
          <strong>Pedido: #1</strong>
          <p>Horário 12:00</p>
        </div>

        <div>
          <strong>Cliente: Gabriella</strong>
          <p> Número de telefone (11) 94828-1249</p>
        </div>

        <div>
          <strong>Endereço de Entrega</strong>
          <p>06787-200</p>
          <p>Rua Francisco Alpino- SP</p>
          <p> Número 22</p>
        </div>

        <div>
          <strong> Itens do Pedido</strong>
          <div>
            <p>Ração sabor carne</p>
            <p>qtd: 2</p>
          </div>
          <div>
            <p>Coleira</p>
            <p>qtd: 2</p>
          </div>
          <div>
            <p>Pote</p>
            <p>qtd: 2</p>
          </div>
        </div>
        <button>Finalizar Pedido</button>
      </Content>
    </Container>
  );
}

export default Detalhes;
