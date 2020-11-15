import React from 'react';
import { useHistory } from 'react-router-dom';
import Vector from '../../assets/Vector.png';
import { Container, Box, Conteudo, IconText } from './styles';

function BoxPacote(props) {
  const history = useHistory();
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
      <button onClick={() =>
        history.push({
          pathname: '/PetShop',
          state: { plano_escolhido: props.type }
        })
      }>Obter Plano</button>
    </Container>
  );
}

export default BoxPacote;
