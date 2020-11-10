import React, { useState, useEffect, useMemo } from 'react';
import { BiMenu } from 'react-icons/bi';
import { CgWorkAlt } from 'react-icons/cg';
import { BsGraphUp, BsFileText } from 'react-icons/bs';
import { RiWalletLine } from 'react-icons/ri';
import { Container, Badge } from './styles';

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
        <li>
          <CgWorkAlt color="#000" size={25} />
          <h5>Serviços</h5>
        </li>
        <li>
          <BsGraphUp color="#000" size={25} />
          <h5>Análise de dados</h5>
        </li>
        <li>
          <RiWalletLine color="#000" size={25} />
          <h5>Carteira</h5>
        </li>
        <li>
          <BsFileText color="#000" size={25} />
          <h5>Pedidos</h5>
        </li>
      </ul>
    </Container>
  );
}

export default HeaderLateral;
