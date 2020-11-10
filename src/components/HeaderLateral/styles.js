import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  color: #000;
  min-height: 92vh;
  max-height: 92vh;
  width: ${(props) => (props.visible ? '400px' : '100px')};
  box-shadow: 2px 2px 5px
    ${(props) => (props.visible ? 'rgba(0,0,0,0.4)' : 'none')};
  background: #fefefe;
  top: 50px;

  ul {
    display: ${(props) => (props.visible ? 'block' : 'none')};
    margin-top: 20px;
    li {
      padding-left: 50px;
      padding-bottom: 20px;
      padding-top: 20px;
      display: flex;
      align-items: center;
      transition: all 0.2s;
      h5 {
        margin-left: 10px;
        font-size: 18px;
        margin-top: 5px;
      }

      &:hover {
        background: #f5f5f5;
      }
    }
  }
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;
  margin-left: 30px;
  margin-top: 10px;
  z-index: 1;
  padding: 10px;

  &:hover {
    background: #f5f5f5;
    border-radius: 60%;
  }
`;
