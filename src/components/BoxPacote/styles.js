import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  h3{
    background-color: #2dc7ff;
    color: white;
    text-align: center;
    padding: 20px;
  }

  button {
      background: #2dc7ff;
      border: 0;
      height: 40px;
      margin-top: 5%;
      margin-bottom:5%;
      margin-left: auto;
      margin-right: auto;
      border-radius: 2px;
      box-shadow: 2px 2px 2px solid rgba(0, 0, 0, 0.5);
      transition: all 0.2s;
      width: 80%;
      font-weight: bold;
      cursor: pointer;

      box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
      &:hover {
        border: 2px solid #2dc7ff;
        background: #fff;
        color: #2dc7ff;
        border-radius: 2px;
      }
    }
`;

export const Box = styled.div`
  border-radius: 2%;
  width: 300px;
  height: 400px;
  background-color: snow;
`;

export const Conteudo = styled.div`
  padding: 5%;
`;

export const IconText = styled.div`
  display:flex;
  img {
    width:18px;
    height: 18px;
  }
  h5 {
    padding-left:5%;
    margin-bottom:15%;
  }
`;
