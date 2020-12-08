import React, { useEffect, useState } from 'react';
import { Container, Parcerias, BoasVindas } from './styles';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
function Main() {
  const history = useHistory();
  const [parcerias, setParcerias] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3333/Partnerships')
      .then(
        res => {
          setParcerias(res.data);
        }
      ).catch(
        e => {
          console.log('ocorreu um erro ao carregar imagens: ' + e);
        }
      );
  }, [])
  return (
    <Container>
      <BoasVindas>
        <div>
          <h2>
            Olá! nós somos a SmartPet. Nossa missão é entregar o produto para
            nossos clientes com eficácia e qualidade, voltado em ajudar a você
            Micro empreendedor a crescer o seu negócio e alavancar sua renda.
            Não seja tímido, venha vender o seu produto conosco!
          </h2>
          <button onClick={() => history.push('/Pacotes')}>Cadastrar-se</button>
        </div>
      </BoasVindas>
      <Parcerias>
        <h3> Marcas Parceiras:</h3>
        <ul>
          {parcerias.map((p) => (
            <img src={`http://localhost:3333/uploads/company/save/${p.foto_perfil}`} alt={p.empresa_id_pedido} key={p.empresa_id_pedido} />
          ))}
        </ul>
      </Parcerias>
    </Container>
  );
}

export default Main;
