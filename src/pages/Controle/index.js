import React from 'react';

import { Container } from './styles';
import HeaderLateral from '../../components/HeaderLateral';

function Controle() {
  return (
    <>
      <HeaderLateral />
      <Container>
        <h1>
          Você ainda não recebeu nenhum pedido, assim que receber
          avisaremos!
        </h1>
      </Container>
    </>
  );
}
export default Controle;
