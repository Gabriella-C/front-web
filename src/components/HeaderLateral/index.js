import React, { useState } from 'react';
import { BiMenu, BiBone } from 'react-icons/bi';
import { BsGraphUp, BsFileText } from 'react-icons/bs';
import { MdPersonOutline } from 'react-icons/md';
import { AiOutlineUnorderedList } from "react-icons/ai";
import { Container, Badge } from './styles';
import { useHistory } from 'react-router-dom';
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
        <button
          onClick={() =>
            history.push({ pathname: '/Pedido', state: { id: empresa } })
          }
        >
          <li>
            <BsFileText color="#000" size={25} />
            <h5>Pedido</h5>
          </li>
        </button>
        <button
          onClick={() =>
            history.push({ pathname: '/Controle', state: { id: empresa } })
          }
        >
          <li>
            <BsGraphUp color="#000" size={25} />
            <h5>Análise de Dados</h5>
          </li>
        </button>
        <button
          onClick={() =>
            history.push({ pathname: '/Produto', state: { id: empresa } })
          }
        >
          <li>
            <BiBone color="#000" size={25} />
            <h5>Produto</h5>
          </li>
        </button>
        <button
          onClick={() =>
            history.push({ pathname: '/ListaProd', state: { id: empresa } })
          }
        >
          <li>
            <AiOutlineUnorderedList color="#000" size={25} />
            <h5>Lista de Produto</h5>
          </li>
        </button>
        <button
          onClick={() =>
            history.push({ pathname: '/Perfil', state: { id: empresa } })
          }
        >
          <li>
            <MdPersonOutline color="#000" size={25} />
            <h5>Perfil</h5>
          </li>
        </button>
      </ul>
    </Container>
  );
}

export default HeaderLateral;
