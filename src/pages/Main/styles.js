import styled from 'styled-components';
import fundo from '../../assets/fundoHome.png';

export const Container = styled.div`
  background: url(${fundo}) no-repeat left top;
  background-size: 1400px 500px;
  min-height: 100vh;
  width: 100%;
  max-height: 100vw;
  input {
    width: 380px;
    margin-left: 430px;
    margin-top: 310px;
    padding: 6px;
    padding-left: 15px;
    border: 0;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
    border-radius: 2px;
  }
  button {
    margin-left: 15px;
    padding: 6px;
    width: 100px;
    border: 0;
    background: #2dc7ff;
    border-radius: 2px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
    font-weight: bold;
    &:hover {
      border: 2px solid #2dc7ff;
      background: none;
      color: #2dc7ff;
      border-radius: 2px;
      background: #fff;
    }
  }
`;

export const Parcerias = styled.div`
  h3 {
    margin-top: 180px;
    margin-left: 30px;
  }

  ul {
    display: flex;
    li {
      width: 75px;
      height: 75px;
      border-radius: 50%;
      background-color: #eee;
      margin-left: 25px;
      margin-top: 20px;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    }
  }
`;
export const Promocoes = styled.div`
  h3 {
    margin-top: 30px;
    margin-left: 30px;
  }
  ul {
    display: flex;
    li {
      width: 180px;
      height: 110px; /* A mágica está aqui */
      background: #eee;
      margin-left: 25px;
      margin-bottom: 30px;
      margin-top: 20px;
      border-radius: 7px;
    }
  }
`;
