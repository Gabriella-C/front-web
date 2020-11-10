import React from 'react';

import { Container } from './styles';
import { AiOutlineCheck } from 'react-icons/ai';

function PetShop() {
  return (
    <Container>
      <div>
        <p>Básico</p>
        <ul>
          <li>
            <AiOutlineCheck color="#2dc7ff" size={16} />
            <h5>Entrega feita pelo Pet PetShop</h5>
          </li>
          <li>
            <AiOutlineCheck color="#2dc7ff" size={16} />
            <h5>Taxa de 5% sobre o valor de cada compra</h5>
          </li>
          <li>
            <AiOutlineCheck color="#2dc7ff" size={16} />
            <h5>Sistema para controlar lucro mensal</h5>
          </li>
          <li>
            <AiOutlineCheck color="#2dc7ff" size={16} />
            <h5>Mensalidade de R$ 30 reais por mês</h5>
          </li>
          <li>
            <AiOutlineCheck color="#2dc7ff" size={16} />
            <h5>Atinge Visibilidade</h5>
          </li>
        </ul>
        <button>Obter Plano</button>
      </div>

      <div>
        <p>Intermediário</p>
        <ul>
          <li>
            <AiOutlineCheck color="#2dc7ff" size={16} />
            <h5>Entrega feita pelo Pet Shop</h5>
          </li>
          <li>
            <AiOutlineCheck color="#2dc7ff" size={16} />
            <h5>Taxa de 7% sobore o valor de cada compra</h5>
          </li>
          <li>
            <AiOutlineCheck color="#2dc7ff" size={16} />
            <h5>Sistema para controlar lucro mensal</h5>
          </li>
          <li>
            <AiOutlineCheck color="#2dc7ff" size={16} />
            <h5>Mensalidade de R$ 50 reais por mês</h5>
          </li>
          <li>
            <AiOutlineCheck color="#2dc7ff" size={16} />
            <h5>Aumento de Visibilidade</h5>
          </li>
        </ul>
        <button>Obter Plano</button>
      </div>

      <div>
        <p>Avançado</p>
        <ul>
          <li>
            <AiOutlineCheck color="#2dc7ff" size={16} />
            <h5>Entrega feita pelo Pet Shop</h5>
          </li>
          <li>
            <AiOutlineCheck color="#2dc7ff" size={16} />
            <h5>Taxa de 10% sobre o valor de cada compra</h5>
          </li>
          <li>
            <AiOutlineCheck color="#2dc7ff" size={16} />
            <h5>Sistema para controlar lucro mensal</h5>
          </li>
          <li>
            <AiOutlineCheck color="#2dc7ff" size={16} />
            <h5>Mensalidade de R$100 por mês</h5>
          </li>
          <li>
            <AiOutlineCheck color="#2dc7ff" size={16} />
            <h5>Sempre será um dos primeiros listados</h5>
          </li>
        </ul>
        <button>Obter Plano</button>
      </div>
    </Container>
  );
}

export default PetShop;
