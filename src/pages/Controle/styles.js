import styled from 'styled-components';
import fundoDash from '../../assets/fundoDash.jpg';

export const Container = styled.div`
  background: url(${fundoDash}) no-repeat center top;
  background-size: 800px 500px;
  width: 100%;
  min-width: 100vw;
  max-width:100vw;
  height: 100%;
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 500px) {
    padding-top: 250px !important;
  }
  h1{
    margin-top: 20px;
    font-size: 18px;
  }
`;
