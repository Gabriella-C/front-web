import styled from 'styled-components';
import fundo from '../../assets/fundoHome.png';

export const Container = styled.div`
  background: url(${fundo}) no-repeat left top;
  background-size: 1400px 500px;
  min-height: 100vh;
  input {
    width: 380px;
    margin-left: 430px;
    margin-top: 310px;
    padding: 4px;
    border: 0;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
  }
  button {
    margin-left: 15px;
    padding: 6px;
    width: 100px;
    border: 0;
    background: #2dc7ff;
    border-radius: 2px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);

    &:hover {
      border: 2px solid #2dc7ff;
      background: none;
      color: #2dc7ff;
      border-radius: 2px;
    }
  }
`;
