import React, { useState, useMemo } from 'react';
import { BiMenu, BiBone } from 'react-icons/bi';
import { CgWorkAlt } from 'react-icons/cg';
import { BsGraphUp, BsFileText } from 'react-icons/bs';
import { RiWalletLine } from 'react-icons/ri';
import { Container, Badge } from './styles';
import { Link, useHistory } from 'react-router-dom';
function HeaderLateral({ empresa }) {
  const [visible, setVisible] = useState(false);
  const history = useHistory();

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container visible={visible}>
      <Badge onClick={handleToggleVisible} visible={!visible}>
        <BiMenu color="#000" size={30} />
      </Badge>
      <ul>
        <button onClick={() => history.push({ pathname: '/Pedido', state: { id: empresa } })}>
          <li>
            <BsFileText color="#000" size={25} />
            Pedido
          </li>
        </button>
        <button onClick={() => history.push({ pathname: '/Controle', state: { id: empresa } })}>
          <li>
            <BsGraphUp color="#000" size={25} />
            Análise de Dados
          </li>
        </button>
        <button onClick={() => history.push({ pathname: '/Produto', state: { id: empresa } })}>
          <li>
            <BiBone color="#000" size={25} />
            Produto
          </li>
        </button>
      </ul>
    </Container>
  );
}

export default HeaderLateral;
