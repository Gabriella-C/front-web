import React, { useState, useRef } from 'react';
import { Container } from './styles';
import axios from 'axios';

function ImageInput() {
  const [preview, setPreview] = useState('');
  const ref = useRef();

  async function handleChange(e) {
    const data = new FormData();

    console.log(e.target.files[0])
    data.append('img', e.target.files[0]);
    console.log(data.file)
    console.log(e)
    console.log(ref)
    const response = await axios.post('http://localhost:3333/imgprodutoimg', data);

    console.log(response.data)
    const { url } = response.data;

    setPreview(url);
  }
  return (
    <Container>
      <label htmlFor="product">
        <img
          src={
            preview ||
            'https://madeirasgasometro.vteximg.com.br/arquivos/ids/168849-1000-1000/mdf-cinza-sagrado-essencial-imagem-01.jpg?v=636655430222730000'
          }
          alt=""
        />
        <input
          type="file"
          id="product"
          accept="image/*"
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}

export default ImageInput;
