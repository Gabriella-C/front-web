import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Container, Content, Marked } from './styles';
import axios from 'axios';

function Detalhes() {
  const location = useLocation();
  const history = useHistory();
  const [dados_usuario, setDados_usuario] = useState([]);
  const [item_pedido, setItem_pedido] = useState([]);
  const [idpedido, setIdpedido] = useState('');
  const [idempresa, setIdempresa] = useState('');
  const [marked, setMarked] = useState(false);
  const [marked2, setMarked2] = useState(false);
  const [marked3, setMarked3] = useState(false);
  const [marked4, setMarked4] = useState(false);

  useEffect(() => {
    let id = 'idpedido = ' + location.state.id;
    setIdpedido(location.state.id);
    setIdempresa(location.state.idempresa);
    axios
      .post('http://localhost:3333/List_Pedidos', { id: id })
      .then((response) => {
        setDados_usuario(response.data);
      });
    axios
      .post('http://localhost:3333/Order_Details', { id: location.state.id })
      .then((response) => {
        setItem_pedido(response.data);
      });
    axios
      .post('http://localhost:3333/Order_Status', { id: location.state.id })
      .then((response) => {
        if (response.data == '') {
          console.log('teste');
        } else {
          for (var i = 0; i < response.data.length; i++) {
            var status = response.data[i].status_detalhe;
            if (status === 'Pedido Aceito') {
              setMarked(true);
            } else if (status === 'Em Separação') {
              setMarked2(true);
            } else if (status === 'Saiu para entrega') {
              setMarked3(true);
            } else if (status === 'Entregue') {
              setMarked4(true);
            } else {
            }
          }
        }
      });
  }, []);

  function orderStatus(orderstatus) {
    let data = new Date();
    if (orderstatus === 'Aceitar Pedido') {
      if (marked) {
        alert('este pedido já foi aceito');
      } else {
        let data_aceito = `${data.getDate()}-${
          data.getMonth() + 1
        }-${data.getFullYear()}`;
        let hora_aceito = `${data.getHours()}:${data.getMinutes()}`;
        let data_hora_aceito = `${data_aceito} ${hora_aceito}`;
        axios
          .post('http://localhost:3333/Order_Status_Create', {
            id: idpedido,
            detalhe: 'Pedido Aceito',
            data: data_hora_aceito,
          })
          .then((response) => {
            setMarked(true);
            alert('Pedido Aceito');
          })
          .catch((e) => console.log('Erro ao atualizar status'));
      }
    } else if (orderstatus === 'Em Separação') {
      if (marked2) {
        alert('este pedido já está em separação');
      } else {
        let data_separacao = `${data.getDate()}-${
          data.getMonth() + 1
        }-${data.getFullYear()}`;
        let hora_separacao = `${data.getHours()}:${data.getMinutes()}`;
        let data_hora_separacao = `${data_separacao} ${hora_separacao}`;
        axios
          .post('http://localhost:3333/Order_Status_Create', {
            id: idpedido,
            detalhe: 'Em Separação',
            data: data_hora_separacao,
          })
          .then((response) => {
            setMarked2(true);
          })
          .catch((e) => console.log('Erro ao atualizar status'));
      }
    } else if (orderstatus === 'Saiu para entrega') {
      if (marked3) {
        alert('este pedido já saiu para entrega');
      } else {
        let data_saiu = `${data.getDate()}-${
          data.getMonth() + 1
        }-${data.getFullYear()}`;
        let hora_saiu = `${data.getHours()}:${data.getMinutes()}`;
        let data_hora_saiu = `${data_saiu} ${hora_saiu}`;
        axios
          .post('http://localhost:3333/Order_Status_Create', {
            id: idpedido,
            detalhe: 'Saiu para entrega',
            data: data_hora_saiu,
          })
          .then((response) => {
            setMarked3(true);
          })
          .catch((e) => console.log('Erro ao atualizar status'));
      }
    }
  }

  function finalizar() {
    if (!marked4) {
      alert(
        'Esse pedido ainda não foi entregue, portanto não pode finaliza-lo!'
      );
    } else {
      axios
        .post('http://localhost:3333/Order_Status_Update', { id: idpedido })
        .then((response) => {
          console.log(idempresa);
          alert('pedido finalizado!');
          history.push({
            pathname: '/Pedido',
            state: { id: idempresa },
          });
        })
        .catch((e) => alert('Erro ao finalizar pedido'));
    }
  }

  return (
    <Container>
      <Content>
        {dados_usuario.map(
          ({
            idpedido,
            nome_usuario,
            celular,
            celular2,
            cep,
            endereco,
            bairro,
            cidade,
            estado,
            numero,
            complemento,
            data_pedido,
            data_previsao,
            hora_previsao,
          }) => (
            <>
              <div>
                <strong>Pedido: #{idpedido}</strong>
                <p>Horário do pedido {data_pedido}</p>
                <div>
                  <p>Previsão de Entrega</p>
                  <p>Data: {data_previsao}</p>
                  <p>Hora: {hora_previsao}</p>
                </div>
              </div>

              <div>
                <strong>Cliente: {nome_usuario}</strong>
                <p>
                  {' '}
                  Número de telefone: {celular} | {celular2}
                </p>
              </div>

              <div>
                <strong>Endereço de Entrega</strong>
                <p>CEP: {cep}</p>
                <p>Endereço: {endereco}</p>
                <p>Bairro: {bairro}</p>
                <p>Cidade: {cidade}</p>
                <p>Estado: {estado}</p>
                <p>Número: {numero}</p>
                <p>Complemento: {complemento}</p>
              </div>
            </>
          )
        )}

        <div>
          <strong> Itens do Pedido</strong>
          {item_pedido.map(({ nome, qtd, descricao }) => (
            <div>
              <p>{nome}</p>
              <p>Quantidade: {qtd}</p>
              <p>Descrição: {descricao}</p>
            </div>
          ))}
        </div>

        <div>
          <strong> Status do Pedido</strong>
          <div>
            <p>Aceitar Pedido</p>
            <Marked
              isMarked={marked}
              onClick={() => orderStatus('Aceitar Pedido')}
            />
          </div>
          <div>
            <p>Em Separação</p>
            <Marked
              isMarked={marked2}
              onClick={() => orderStatus('Em Separação')}
            />
          </div>
          <div>
            <p>Saiu para entrega</p>
            <Marked
              isMarked={marked3}
              onClick={() => orderStatus('Saiu para entrega')}
            />
          </div>
          <div>
            <p>Entregue</p>
            <Marked
              isMarked={marked4}
              onClick={() => orderStatus('Entregue')}
            />
          </div>
        </div>
        <button onClick={finalizar}>Finalizar Pedido</button>
      </Content>
    </Container>
  );
}

export default Detalhes;
