import React from 'react';
import { Link } from 'react-router-dom';

import Vector from '../../assets/Vector.png';
import { Container, Box, Conteudo, IconText } from './styles';

function BoxPacote(props) {
  return (
    <Container>
      <Box>
        <div>
          <h3>{props.type}</h3>
        </div>
        <Conteudo>
          {props.desc.map((descricao, index) => {
            return (
              <IconText key={index}>
                <img src={Vector} alt="icon" />
                <h5>{descricao}</h5>
              </IconText>
            );
          })}
        </Conteudo>
      </Box>
      <button>
        <Link to="/Petshop"> Obter Plano</Link>
      </button>
    </Container>
  );
}

export default BoxPacote;
