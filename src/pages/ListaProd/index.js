import React from 'react';

import { Container, ListItem, Button } from './styles';
import { produto } from '../../data/data';

function ListaProd() {
  const [marked, setMarked] = React.useState(true);

  return (
    <Container>
      <ul>
        {produto.map((p) => {
          var isMarked = !marked;
          function handleMarked(id) {
            isMarked = true;
          }

          return (
            <ListItem isMarked={isMarked} id={p.id}>
              <img src={p.url} />
              <li>
                <strong>Nome: {p.nome}</strong>
                <p> Validade: {p.date}</p>
                <p> Valor: {p.valor}</p>
                <p> Marca: {p.marca}</p>
                <p> Peso: {p.peso}</p>
              </li>
              <div>
                <button onClick={handleMarked(p.id)} />
              </div>
            </ListItem>
          );
        })}
        <div>
          <Button type="submit">Registrar Indisponibilidade</Button>
          <Button color="#f76abc" type="submit">
            Registrar Disponibilidade
          </Button>
        </div>
      </ul>
    </Container>
  );
}

export default ListaProd;
