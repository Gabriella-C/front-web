import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function Header() {
  return (
    <Container>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Entregador">Entregador</Link>
          </li>
          <li>Petshop</li>
        </ul>

        <button>Entrar</button>
      </div>
    </Container>
  );
}

export default Header;
