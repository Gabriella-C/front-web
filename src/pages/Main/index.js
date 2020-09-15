import React from 'react';
import { Container, Parcerias, Promocoes } from './styles';

function Main() {
  return (
    <Container>
      <input type="text" placeholder="Buscar" />

      <button>Buscar</button>
      <Parcerias>
        <h3> Marcas Parceiras:</h3>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </Parcerias>
      <Promocoes>
        <h3> Promoções: </h3>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </Promocoes>
    </Container>
  );
}

export default Main;
