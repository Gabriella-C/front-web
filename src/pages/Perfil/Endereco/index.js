import React, { useEffect, useState } from 'react';
import HeaderLateral from '../../../components/HeaderLateral';
import { useHistory, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Container } from './styles';
import axios from 'axios';
import { soLetraMMask, soLetraMask, cepMask, numeroMask } from '../../../Mascara/mask';

function PerfilEndereco() {
  const history = useHistory();
  const location = useLocation();
  const { register, handleSubmit, errors, reset } = useForm();
  const [idempresa, setIdEmpresa] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [cep, setCep] = useState('');
  const [estado, setEstado] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');

  useEffect(() => {
    let id = location.state.id;
    setIdEmpresa(location.state.id);
    axios.post('http://localhost:3333/Company', { 'idempresa': id })
      .then(
        res => {
          console.log(res.data[0]);
          setEndereco(res.data[0].endereco);
          setNumero(res.data[0].numero);
          setCep(res.data[0].cep);
          setComplemento(res.data[0].complemento);
          setCidade(res.data[0].cidade);
          setBairro(res.data[0].bairro);
          setEstado(res.data[0].estado);
        }
      );
  }, []);


  function onSubmit(data) {
    if (
      data.endereco === '' ||
      data.numero === '' ||
      data.cep === '' ||
      data.cidade === '' ||
      data.bairro === '' ||
      data.estado === ''
    ) {
      alert('Apenas Complemento não é obrigatório!')
    } else if (cep.length < 9) {
      alert('O CEP está incompleto!')
    } else {
      axios.post('http://localhost:3333/Company_Address_Update', {
        'idempresa': idempresa,
        'endereco': data.endereco,
        'numero': data.numero,
        'cep': data.cep,
        'cidade': data.cidade,
        'bairro': data.bairro,
        'estado': data.estado,
        'complemento': data.complemento
      }).then(
        alert('Endereço alterado com sucesso!'),
        clear(),
        history.push({ pathname: '/Pedido', state: { id: idempresa } }),
      );

      function clear() {
        setEndereco('');
        setNumero('');
        setCep('');
        setCidade('');
        setBairro('');
        setEstado('');
        setComplemento('');
      }
    }
  }

  return (
    <>
      <HeaderLateral empresa={idempresa} />
      < Container >
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="address"
            name="endereco"
            id="endereco"
            placeholder="Endereço"
            ref={register}
            value={endereco}
            onChange={e => { setEndereco(e.target.value) }}
          />
          <div>
            <input
              type="text"
              name="numero"
              id="numero"
              placeholder="Numero"
              ref={register}
              value={numero}
              onChange={event => { setNumero(numeroMask(event.target.value)) }}
            />
            <input
              type="text"
              name="cep"
              id="cep"
              placeholder="CEP"
              ref={register}
              value={cep}
              maxLength='9'
              onChange={event => { setCep(cepMask(event.target.value)) }}
            />
          </div>
          <input
            type="text"
            name="cidade"
            id="cidade"
            placeholder="Cidade"
            ref={register}
            value={cidade}
            onChange={event => { setCidade(soLetraMask(event.target.value)) }}
          />
          <div>
            <input
              type="text"
              name="bairro"
              id="bairro"
              placeholder="Bairro"
              ref={register}
              value={bairro}
              onChange={e => { setBairro(e.target.value) }}
            />
            <input
              type="text"
              name="estado"
              id="estado"
              placeholder="Estado"
              ref={register}
              maxLength='2'
              value={estado}
              onChange={event => { setEstado(soLetraMMask(event.target.value)) }}
            />
          </div>
          <input
            type="text"
            name="complemento"
            id="complemento"
            placeholder="Complemento"
            ref={register}
            value={complemento}
            onChange={e => { setComplemento(e.target.value) }}
          />
          <button>Atualizar Endereço</button>
        </form>
      </Container>
    </>
  );
}

export default PerfilEndereco;
