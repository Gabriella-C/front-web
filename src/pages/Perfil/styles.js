import styled from 'styled-components';
import fundo from '../../assets/6308.jpg';

export const Container = styled.div`
  background: url(${fundo}) no-repeat;
  background-size: 100vw 566px;
  min-height: 100vh;
  max-width: 100vw; /* min de altura */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 70px;

  h2 {
    padding-top: 24px;
    margin-bottom: 10px;
    border-bottom: 2px solid #2dc7ff;
    padding-bottom: 4px;
    padding-left: 30px;
    padding-right: 30px;
  }

  form {
    width: 400px; /* largura do box */
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
    div {
      display: flex;
      width: 400px;
      justify-content: center;
      input {
        width: 140px;
      }
    }
  }
  .divButton{
    justify-content: space-around;
  }
  input {
    margin-top: 20px;
    width: 300px;
    height: 30px;
    border: 0;
    padding: 4px;
    padding-left: 10px;
    border-radius: 2px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
    background: #f5f5f5;
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

    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
    &:hover {
      border: 2px solid #2dc7ff;
      background: #fff;
      color: #2dc7ff;
      border-radius: 2px;
    }
  }
  .plano{
    width: 84%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
    justify-content: space-between;
    input{
      width: 70%;
      margin-bottom: 10px;
    }
    select {
      width: 70%;
      height: 30px;
      background: #eee;
      border: 0;
      border-radius: 4px;
      padding-left: 10px;
    }
  }
  .desativar{
    background-color: #f76abc;
  }
  .gratuito{
    color: grey;
    font-size: 15px;
    padding: 10px;
  }
  p {
    color: red;
    margin-top: 5px;
    margin-bottom: -10px;
  }
`;

export const ImageInput = styled.div`
align-self: center;
margin-bottom: 10px;
margin-top: 10px;
label {
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
}
img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px solid #f76abc;
  background: #eee;
}

input {
  display: none;
}`;