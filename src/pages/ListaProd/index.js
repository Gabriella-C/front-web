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
                  <p> Validade: {p.validadedata}</p>
                  <p> Valor: {valor}</p>
                  <p> Status: {p.status}</p>
                </li>
                <div>
                  <button onClick={
                    () => {
                      let dia = p.validadedata.substr(0, 2);
                      let mes = p.validadedata.substr(3, 2);
                      let ano = p.validadedata.substr(6, 4);
                      let data = ano + '-' + mes + '-' + dia;
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
                          data: data,
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
                  <button onClick={() => history.push({ pathname: '/EditProduto', state: { idprod: p.idproduto } })}>
                    <BiTrash size={20} color="#ec524b" />
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
