import styled from 'styled-components';
import fundo from '../../assets/fundoEntregador.png';

export const Container = styled.div`
  background: url(${fundo}) no-repeat;
  background-size: 1350px 500px;
  min-height: 100vh; /* min de altura */

  h2 {
    padding-top: 246px;
    margin-bottom: 10px;
    border-bottom: 2px solid #2dc7ff;
    padding-bottom: 4px;
    margin-left: 27px;
  }
  form {
    width: 100%; /* largura do box */
    padding: 0 40%; /* padding à esquerda e à direita */
    margin: 0 60px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;

    div {
      display: flex;
      width: 300px;
      justify-content: space-between; /* justify se ajusta, space-between separa a propridade */
      input {
        width: 140px;
      }
    }

    input {
      margin-top: 20px;
      width: 300px;
      height: 30px;
      border: 0;
      padding: 4px;
      padding-left: 10px;
      border-radius: 2px;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    }
    button {
      background: #2dc7ff;
      border: 0;
      height: 40px;
      margin-top: 20px;
      border-radius: 2px;
      box-shadow: 2px 2px 2px solid rgba(0, 0, 0, 0.5);
      transition: all 0.2s;
      width: 120px;
      font-weight: bold;
      margin-left: 36px;

      box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
      &:hover {
        border: 2px solid #2dc7ff;
        background: #fff;
        color: #2dc7ff;
        border-radius: 2px;
      }
    }
  }
`;

export const Input2 = styled.input``;
