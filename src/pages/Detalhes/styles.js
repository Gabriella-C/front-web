import styled from 'styled-components';
import fundo from '../../assets/5230.jpg';

export const Container = styled.div`
  background: url(${fundo}) no-repeat;
  background-size: 1350px 650px;
  min-height: 100vh; /* min de altura */

  width: 100%;
  height: 100%;
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  margin-top: 30px;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #eee;
  border-radius: 4px;
  padding: 10px;

  width: 80%;

  button {
    background: #f76abc;
    border: 2px solid rgba(0, 0, 0, 0);
    padding: 10px;
    margin-top: 20px;
    border-radius: 4px;
    transition: all 0.2s;
    &:hover {
      background: #fff;
      color: #f76abc;
      border-color: #f76abc;
    }
  }

  div {
    &:hover {
      border: 2px solid #2dc7ff;
    }
    border: 2px solid rgba(0, 0, 0, 0);
    & + div {
      margin-top: 20px;
    }
    width: 80%;
    padding: 10px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    transition: all 0.2s;
    strong {
      font-size: 14px;
    }
    p {
      font-size: 12px;
      margin-top: 10px;
      opacity: 0.5;
    }

    > div {
      background: none;
      display: flex;
      padding: 0;
      justify-content: space-between;
      transition: all 0.2s;
      & + div {
        margin: 0;
      }
      &:hover {
        border: 2px solid rgba(0, 0, 0, 0);
      }

      p {
        & + p {
          margin-right: 70%;
        }
      }
    }
  }
`;
