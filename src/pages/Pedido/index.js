import React from 'react';
import { Link } from 'react-router-dom';

import { Container, ListaPedido, ComponentePedido } from './styles';
import { data } from '../../data/data';

function Pedido() {
  return (
    <Container>
      <h2>Pedidos</h2>
      <div>
        <ListaPedido>
          {data.map((produto) => (
            <ComponentePedido>
              <strong>Pedido: {'#' + produto.id}</strong>
              <ul>
                {produto.produtos.map((p) => (
                  <li>
                    <p>Nome: {p.nome}</p>
                    <p>Descrição: {p.descricao}</p>
                    <p>Preço: {p.preco}</p>
                  </li>
                ))}
              </ul>
              <Link to="/detalhes">Mais Detalhes</Link>
            </ComponentePedido>
          ))}
        </ListaPedido>
      </div>
    </Container>
  );
}

export default Pedido;
