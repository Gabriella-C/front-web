import styled from 'styled-components';
import fundo from '../../assets/fundoPetShop.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${fundo}) no-repeat left top;
  background-size: 1400px 700px;
  min-height: 100vh;
`;

export const Title = styled.div`
  padding-bottom: 20px;
  width: 20%;
  text-align: center;

  @media (min-width: 680px) {
    margin-top: 80px;
  }

  div {
    height: 2px;
    width: 100%;
    background-color: #2dc7ff;
  }
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @media (min-width: 810px) {
    flex-direction: row;
    align-items: baseline;
  }
`;
