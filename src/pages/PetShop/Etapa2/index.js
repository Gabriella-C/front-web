import React from 'react';
import { Container } from '../styles';
import { useHistory } from 'react-router-dom';

function Etapa2() {
  const history = useHistory();

  return (
    <Container>
      <form>
        <h2>Cadastre-se aqui</h2>
        <div>
          <h4>Celular:</h4>
          <input
            type="text"
            name="celular"
            id="celular"
            placeholder="_______-_______"
          />
        </div>
        <input
          type="address"
          name="endereco"
          id="endereco"
          placeholder="Endereco"
        />
        <div>
          <input type="text" name="numero" id="numero" placeholder="Numero" />
          <input type="text" name="cep" id="cep" placeholder="CEP" />
        </div>
        <div>
          <input type="text" name="estado" id="estado" placeholder="Estado" />
          <input type="text" name="bairro" id="bairro" placeholder="Bairro" />
        </div>
        <button onClick={() => history.push('/Pedido')} type="submit">
          Finalizar
        </button>
      </form>
    </Container>
  );
}

export default Etapa2;
