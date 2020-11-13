import React from 'react';
import { Link } from 'react-router-dom';

import HeaderLateral from '../../components/HeaderLateral';
import { formatPrice } from '../../util/format';
import { Container, ListaPedido, ComponentePedido } from './styles';
import { data } from '../../data/data';

function Pedido() {
  let total = 0;
  return (
    <>
      <HeaderLateral />
      <Container>
        <h2>Pedidos</h2>
        <div>
          <ListaPedido>
            {data.map((produto) => (
              <ComponentePedido>
                <div>
                  <strong>{'#' + produto.id}</strong>
                </div>
                {produto.produtos.map((p) => {
                  total = total + p.preco;
                })}
                <h5>Total: R$ {formatPrice(total)}</h5>
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
