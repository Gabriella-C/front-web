import React, { useEffect, useState } from 'react';
import { Container } from '../styles';
import { useHistory, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function Etapa2() {
  const history = useHistory();
  const location = useLocation();
  const { register, handleSubmit } = useForm();
  const [nome, setNome] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [plano, setPlano] = useState('');

  useEffect(() => {
    setNome(location.state.nome);
    setCnpj(location.state.cnpj);
    setEmail(location.state.email);
    setSenha(location.state.senha);
    setPlano(location.state.plano);
  }, [location]);

  function onSubmit(data) {
    if (
      data.celular === '' ||
      data.endereco === '' ||
      data.numero === '' ||
      data.cep === '' ||
      data.cidade === '' ||
      data.bairro === '' ||
      data.estado === ''
    ) {
      alert('Apenas Telefone e Complemento não é obrigatório!')
    } else {
      axios.post('http://localhost:3333/Company_Register', {
        'nome': nome,
        'cnpj': cnpj,
        'email': email,
        'senha': senha,
        'plano': plano,
        'celular': data.celular,
        'telefone': data.telefone,
        'endereco': data.endereco,
        'numero': data.numero,
        'cep': data.cep,
        'cidade': data.cidade,
        'bairro': data.bairro,
        'estado': data.estado,
        'complemento': data.complemento
      }).then(
        history.push('/Login')
      )
    }
  }
  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Cadastre-se aqui</h2>
        <div>
          <input
            type="text"
            name="celular"
            id="celular"
            placeholder="Celular"
            ref={register}
          />
          <input
            type="text"
            name="telefone"
            id="telefone"
            placeholder="Telefone"
            ref={register}
          />
        </div>
        <input
          type="address"
          name="endereco"
          id="endereco"
          placeholder="Endereço"
          ref={register}
        />
        <div>
          <input type="text" name="numero" id="numero" placeholder="Numero" ref={register} />
          <input type="text" name="cep" id="cep" placeholder="CEP" ref={register} />
        </div>
        <input
          type="text"
          name="cidade"
          id="cidade"
          placeholder="Cidade"
          ref={register}
        />
        <div>
          <input type="text" name="bairro" id="bairro" placeholder="Bairro" ref={register} />
          <input type="text" name="estado" id="estado" placeholder="Estado" ref={register} />
        </div>
        <input
          type="text"
          name="complemento"
          id="complemento"
          placeholder="Complemento"
          ref={register}
        />
        <button type="submit">
          Finalizar
        </button>
      </form>
    </Container>
  );
}

export default Etapa2;
