import React, { useState } from 'react';

import { Container } from './styles';
import api from '../../services/api';

function ImageInput() {
  const [file, setFile] = React.useState();
  const [preview, setPreview] = React.useState();
  const [registerField, setRegisterField] = useState();
  const ref = React.useRef();

  React.useEffect(() => {
    if (ref.current) {
      setRegisterField({
        name: 'image_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref, registerField]);

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);
    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
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
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}

export default ImageInput;
