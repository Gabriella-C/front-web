import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HeaderLateral from '../../components/HeaderLateral';
import { formatPrice } from '../../util/format';
import { Container, ListaPedido, ComponentePedido } from './styles';
import axios from 'axios';

function Pedido() {
  const location = useLocation();
  const [pedidos, setPedidos] = useState([]);


  useEffect(() => {
    let id = location.state.id;
    let idempresa = 'idempresa = ' + id;
    axios.post('http://localhost:3333/List_Pedidos', { 'id': idempresa })
      .then(
        response => {
          setPedidos(response.data);
        }
      );
  }, []);


  let total = 0;
  return (
    <>
      <HeaderLateral />
      <Container>
        <h2>Pedidos</h2>
        <div>
          <ListaPedido>
            {pedidos.map(({ idpedido, total }) => (
              <ComponentePedido>
                <div>
                  <strong>{'#' + idpedido}</strong>
                </div>
                <h5>Total: {formatPrice(total)}</h5>
                <h6>{(total = 0)}</h6>
                <Link to="/detalhes">Mais Detalhes</Link>
              </ComponentePedido>
            ))}
          </ListaPedido>
        </div>
      </Container>
    </>
  );
}

export default Pedido;
