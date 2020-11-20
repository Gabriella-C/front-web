import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    width: 80%;
    height: 80%;
    background: #eee;
    padding: 10px;
    border-radius: 4px;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }
`;

export const ListItem = styled.li`
  display: flex;
  width: 100%;
  background: #fff;
  padding: 10px;
  border-radius: 4px;
  align-items: center;
  border: 2px solid ${(props) => (props.isMarked ? '#2dc7ff' : 'rgba(0,0,0,0)')};

  & + li {
    margin-top: 10px;
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background: #eee;
    border: 2px solid #f76abc;
    margin-right: 10px;
  }

  div {
    margin-left: 10%;
    margin-bottom: 10%;
    > button {
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background: #eee;
      border: 3.5px solid ${(props) => (props.isMarked ? '#f76abc' : '#eee')};
    }
  }

  > li {
    width: 80%;
    display: flex;
    flex-direction: column;
    strong {
      font-size: 14px;
      white-space: nowrap;
    }
    p {
      text-align: left;
      font-size: 12px;
      font-weight: normal;
      margin-top: 5px;
      color: #6666;
    }
  }
`;

export const Button = styled.button`
  background: ${(props) => (props.color ? props.color : '#2dc7ff')};
  border: 0;
  height: 40px;
  margin-top: 20px;
  border-radius: 4px;
  box-shadow: 2px 2px 2px solid rgba(0, 0, 0, 0.5);
  transition: all 0.2s;
  padding: 10px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
  border: 2px solid rgba(0, 0, 0, 0);
  display: flex;
  align-items: center;
  &:hover {
    border: 2px solid ${(props) => (props.color ? props.color : '#2dc7ff')};
    background: #fff;
    color: ${(props) => (props.color ? props.color : '#2dc7ff')};
    border-radius: 2px;
  }
`;
