import styled from 'styled-components';
import fundo from '../../assets/fundoHome.png';

export const Container = styled.div`
  background: url(${fundo}) no-repeat left top;
  background-size: 1400px 500px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h2 {
    margin-top: 10px;
    font-size: 16px;
    justify-content: center;
  }
`;

export const Parcerias = styled.div`
  margin-top: 100px;
  h3 {
    margin-left: 30px;
  }

  ul {
    display: flex;
    li {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      background-color: #eee;
      margin-left: 25px;
      margin-top: 20px;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    }
  }
`;

export const BoasVindas = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 200px;
  div {
    flex-direction: column;
    width: 50%;
    display: flex;
    align-items: center;
    padding: 20px;
    text-align: center;
    background: #fefefe;
    border-radius: 4px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
  }

  button {
    margin-top: 50px;
    width: 50%;
    border: 0;
    border-radius: 4px;
    height: 35px;
    background: #f76abc;
    margin-bottom: 10px;
    border: 2px solid #f76abc;
    transition: all 0.2s;

    &:hover {
      background: #fefefe;
      color: #f76abc;
    }
  }
`;
