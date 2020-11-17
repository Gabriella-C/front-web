import React from 'react';
import { Container, Parcerias, BoasVindas } from './styles';
import { useHistory } from 'react-router-dom';

function Main() {
  const history = useHistory();
  return (
    <Container>
      <BoasVindas>
        <div>
          <h2>
            Olá, nós somos a SmartPet. Nossa missão é entregar o produto para
            nossos clientes com eficácia e qualidade, voltado em ajudar a você
            Micro empreendedor a crescer o seu negócio e alavancar sua renda.
            Não seja tímido, venha vender o seu produto conosco!
          </h2>
          <button onClick={() => history.push('/Pacotes')}>Cadastrar-se</button>
        </div>
      </BoasVindas>
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
    </Container>
  );
}

export default Main;
