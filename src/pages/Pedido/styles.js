import styled from 'styled-components';
import fundo from '../../assets/ped.jpg';

export const Container = styled.div`
  background: url(${fundo}) no-repeat;
  background-size: 1352px 600px;
  background-position: center 40px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100vw;

  h2 {
    border-bottom: 2px solid #f76abc;
    margin-bottom: 20px;
    padding: 20px;
    padding-bottom: 10px;
  }
`;

export const ListaPedido = styled.ul`
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
  border-radius: 4px;
  padding: 8px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
  width: 100%;
  max-width: 1200px;
  min-width: 800px;
`;

export const ComponentePedido = styled.li`
  width: 100%;
  height: 200px;
  background: #eeee;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
  strong {
    color: rgba(0, 0, 0, 0.8);
    font-size: 12px;
  }

  ul {
    display: flex;
    flex-direction: row;
    li {
      padding-right: 10px;
      border-right: 1px solid rgba(0, 0, 0, 0.7);
      & + li {
        margin-left: 10px;
      }

      p {
        font-size: 10px;
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }

  a {
    font-size: 11px;
    margin-right: 30px;
    margin-top: 120px;
    color: #2dc7ff;
    transition: all 0.2s;

    &:hover {
      color: #2dc4cc;
      border-bottom: 2px solid #f76abc;
    }
  }

  & + li {
    margin-top: 20px;
  }
`;
