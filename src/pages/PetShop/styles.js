import styled from 'styled-components';
import fundo from '../../assets/fundoPetShop.jpg';

export const Container = styled.div`
  background: url(${fundo}) no-repeat #fefefe;
  background-size: 90% 100%;
  background-position: top center;
  background-attachment: fixed;
  min-height: 100vh; /* min de altura */
  min-width: 100vw;
  width: 100%;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    background: #fff;
    font-size: 15px;
    border-radius: 2px;
    font-weight: bold;
    padding-bottom: 75px;
    width: 360px;
    height: 360px;
    & + div {
      margin-left: 30px;
    }

    p {
      width: 100%;
      text-align: center;
      padding: 10px;
      border-bottom: 2px solid #2dc7ff;
      margin-bottom: 10px;
      background: #2dc7ff;
      color: #fff;
    }

    ul {
      white-space: nowrap;
      font-weight: normal;
      font-size: 17px;

      li {
        display: flex;
        align-content: center;
        padding: 15px;

        h5 {
          padding-left: 10px;
        }
      }
    }
  }

  button {
    background: #2dc7ff;
    border: 0;
    height: 40px;
    border-radius: 2px;
    box-shadow: 2px 2px 2px solid rgba(0, 0, 0, 0.5);
    transition: all 0.2s;
    width: 120px;
    margin-left: 120px;
    margin-right: 120px;
    margin-top: 130px;
    font-weight: bold;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
    &:hover {
      border: 2px solid #2dc7ff;
      background: #fff;
      color: #2dc7ff;
      border-radius: 2px;
    }
  }
`;
