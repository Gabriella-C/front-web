import React, { useState, useEffect, useMemo } from 'react';
import { BiMenu, BiBone } from 'react-icons/bi';
import { CgWorkAlt } from 'react-icons/cg';
import { BsGraphUp, BsFileText } from 'react-icons/bs';
import { RiWalletLine } from 'react-icons/ri';
import { MdPersonOutline } from 'react-icons/md';
import { Container, Badge } from './styles';
import { Link } from 'react-router-dom';

function HeaderLateral() {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container visible={visible}>
      <Badge onClick={handleToggleVisible} visible={!visible}>
        <BiMenu color="#000" size={30} />
      </Badge>
      <ul>
        <Link to="/Pedido">
          <li>
            <BsFileText color="#000" size={25} />
            <h5>Pedido</h5>
          </li>
        </Link>
        <Link to="/Controle">
          <li>
            <BsGraphUp color="#000" size={25} />
            <h5>Análise de Dados</h5>
          </li>
        </Link>
        <Link to="/Produto">
          <li>
            <BiBone color="#000" size={25} />
            <h5>Produto</h5>
          </li>
        </Link>
        <Link to="/Perfil">
          <li>
            <MdPersonOutline color="#000" size={25} />
            <h5>Perfil</h5>
          </li>
        </Link>
      </ul>
    </Container>
  );
}

export default HeaderLateral;
