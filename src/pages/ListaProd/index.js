import React, { useEffect, useState } from 'react';
import { Container, ListItem, Button } from './styles';
import { BiPencil, BiTrash } from 'react-icons/bi';
import { useHistory, useLocation } from 'react-router-dom';
import HeaderLateral from '../../components/HeaderLateral';
import axios from 'axios';
import { moedaMask } from '../../Mascara/mask';

function ListaProd() {
  const [marked, setMarked] = useState(true);
  const [idempresa, setIdempresa] = useState('');
  const [produtos, setProdutos] = useState([]);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    let id = location.state.id;
    setIdempresa(id);
    axios.post('http://localhost:3333/List_Product', { "idempresa": id })
      .then(
        response => {
          console.log(response);
          setProdutos(response.data);
        }
      );
  }, []);
  return (
    <>
      <HeaderLateral empresa={idempresa} />
      <Container>
        <ul>
          {produtos.map((p) => {
            var isMarked = !marked;
            let valor = moedaMask("'" + p.valor + "'");
            let peso = moedaMask("'" + p.peso + "'");
            function handleMarked(id) {
              isMarked = true;
            }

            return (
              <ListItem isMarked={isMarked} id={p.idproduto} key={p.idproduto}>
                <li>
                  <strong>Nome: {p.nome}</strong>
                  <p> Valor: {valor}</p>
                  <p> Status: {p.status}</p>
                </li>
                <div>
                  <button onClick={
                    () => {
                      let status = '';
                      if (p.status === 'disponível') {
                        status = true;
                      } else {
                        status = false;
                      }
                      history.push({
                        pathname: '/EditProduto',
                        state: {
                          empresa: idempresa,
                          idprod: p.idproduto,
                          nome: p.nome,
                          valor: valor,
                          marca: p.marca,
                          peso: peso,
                          um: p.unidade_medida,
                          desc: p.descricao,
                          status: status,
                          statusLabel: p.status,
                          foto: p.foto_principal,
                          preview: 'http://localhost:3333/uploads/product/save/' + p.foto_principal
                        }
                      })
                    }
                  }>
                    <BiPencil size={20} color="#2dc7ff" />
                  </button>
                </div>
              </ListItem>
            );
          })}

        </ul>
      </Container>
    </>
  );
}

export default ListaProd;
