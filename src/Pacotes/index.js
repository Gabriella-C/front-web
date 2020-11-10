import { Container, Title, Box } from './styles';

import React from 'react';
import BoxPacote from '../../components/BoxPacote';

var obj = ["Entrega feita pelo Pet Shop","Taxa de 5% sobre o valor de cada compra","Sistema para verificar pedidos e valor ganho ao mês", "Mensalidade de R$ 30 por mês"];

var obj2 = ["Entrega feita pelo Pet Shop","Taxa de 7% sobre o valor de cada compra","Sistema para verificar pedidos e valor ganho ao mês", "Mensalidade de R$ 50 por mês", "Aumento de visibilidade"];

var obj3 = ["Entrega feita pelo Pet Shop","Taxa de 10% sobre o valor de cada compra","Sistema para verificar pedidos e valor ganho ao mês", "Mensalidade de R$ 100 por mês", "Estrela do nosso aplicativo sempre será os primeiros a serem listados"];

function Pacotes() {
  return (
    <>
      <Container>
        <Title>
          <h2>Planos</h2>
          <div></div>
        </Title>
        <Box>
          <BoxPacote type={"Básico"} desc={obj}/>
          <BoxPacote type={"Intermediário"} desc={obj2}/>
          <BoxPacote type={"Avançado"} desc={obj3}/>
        </Box>
      </Container>
    </>
  );
}

export default Pacotes;
