import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100vw;
  height: 100%;
  min-height: 100vh;
  padding: 40px;
  
  div {
    width: 50%;
    height: 50%;

    text-align: center;

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  .dataCategoriaEspecie{
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    input{
      width: 70%;
      margin-bottom: 10px;
    }
    .data{
      margin-bottom: 10px;
    }
    select {
      width: 68%;
      height: 30px;
      background: #eee;
      border: 0;
      border-radius: 4px;
      padding-left: 10px;
    }
  }

  h3 {
    margin-bottom: 15px;
    font-size: 20px;
    margin-top: 30px;
  }
  button {
    background: #f76abc;
    border: 2px solid rgba(0, 0, 0, 0);
    padding: 10px;
    margin-top: 20px;
    border-radius: 4px;
    transition: all 0.2s;
    width: 200px;
    &:hover {
      background: #fff;
      color: #f76abc;
      border-color: #f76abc;
    }
  }

  input {
    width: 50%;
    height: 30px;
    background: #eee;
    border: 0;
    border-radius: 4px;
    padding-left: 10px;
    & + input {
      margin-top: 10px;
    }
  }`;

export const ImageInput = styled.div`
align-self: center;
margin-bottom: 10px;
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
