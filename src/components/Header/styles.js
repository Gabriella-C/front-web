import styled from 'styled-components';

export const Container = styled.div`
  height: 50px;
  border-bottom: 2px solid #2dc7ff;
  position: absolute;
  min-width: 100vw;
  width: 100%;
  div {
    display: flex;
    float: right;
    margin-right: 20px;

    ul {
      margin-right: 50px;
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      li {
        font-weight: bold;
        padding: 5px;


        a{
          color: rgba(0, 0, 0, 0.7);
          transition: all 0.2s;
          &:hover {
          color: #000;
        }


        }
      }
    }

    button {
      background: #2dc7ff;
      border: 0;
      height: 40px;
      margin-top: 5px;
      border-radius: 2px;
      box-shadow: 2px 2px 2px solid rgba(0, 0, 0, 0.5);
      transition: all 0.2s;
      width: 120px;
      font-weight: bold;

      box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
      &:hover {
        border: 2px solid #2dc7ff;
        background: #fff;
        color: #2dc7ff;
        border-radius: 2px;
      }
    }
  }
`;
