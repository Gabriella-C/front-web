import React from 'react';

import { Container } from './styles';

function Header() {
  return (
    <Container>
      <div>
        <ul>
          <li>Home</li>
          <li>Entregador</li>
          <li>Petshop</li>
        </ul>

        <button>Entrar</button>
      </div>
    </Container>
  );
}

export default Header;
