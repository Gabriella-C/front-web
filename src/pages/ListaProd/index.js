import React from 'react';

import { Container, ListItem, Button } from './styles';
import { BiPencil, BiTrash } from 'react-icons/bi';
import { produto } from '../../data/data';
import { useHistory } from 'react-router-dom';

function ListaProd() {
  const [marked, setMarked] = React.useState(true);
  const history = useHistory();
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
              <li>
                <strong>Nome: {p.nome}</strong>
                <p> Validade: {p.date}</p>
                <p> Valor: {p.valor}</p>
              </li>
              <div>
                <button onClick={() => history.push('/EditProduto')}>
                  <BiPencil size={20} color="#2dc7ff" />
                </button>
                <button>
                  <BiTrash size={20} color="#ec524b" />
                </button>
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
