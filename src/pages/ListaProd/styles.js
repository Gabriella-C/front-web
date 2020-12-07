import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    width: 80%;
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

  div {
    right: 15%;
    margin-bottom: 2%;
    margin-left: 25%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80px;

    button {
      border: 0;
      background: none;

      padding: 4px;
      border-radius: 4px;

      &:hover {
        background: #eee;
      }
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
