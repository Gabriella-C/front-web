import React, { useState } from 'react';
import { Container, Content, Marked } from './styles';

function Detalhes() {
  const [marked, setMarked] = useState(true);
  const [marked2, setMarked2] = useState(false);
  const [marked3, setMarked3] = useState(false);
  const [marked4, setMarked4] = useState(false);
  return (
    <Container>
      <Content>
        <div>
          <strong>Pedido: #1</strong>
          <p>Horário 12:00</p>
          <div>
            <p> Previsão de Entrega</p>
            <input type="time" placeholder="00:00" />
          </div>
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
            <p>Quantidade: 2</p>
          </div>
          <div>
            <p>Coleira</p>
            <p>Quantidade: 2</p>
          </div>
          <div>
            <p>Pote</p>
            <p>Quantidade: 2</p>
          </div>
        </div>
        <div>
          <strong> Status do Pedido</strong>
          <div>
            <p>Aceitar Pedido</p>
            <Marked isMarked={marked} onClick={() => setMarked(!marked)} />
          </div>
          <div>
            <p>Em Separação</p>
            <Marked isMarked={marked2} onClick={() => setMarked2(!marked2)} />
          </div>
          <div>
            <p>Saiu para entrega</p>
            <Marked isMarked={marked3} onClick={() => setMarked3(!marked3)} />
          </div>
          <div>
            <p>Entregue</p>
            <Marked isMarked={marked4} onClick={() => setMarked4(!marked4)} />
          </div>
        </div>
        <button>Finalizar Pedido</button>
      </Content>
    </Container>
  );
}

export default Detalhes;
