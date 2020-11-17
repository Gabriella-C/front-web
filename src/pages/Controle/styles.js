import styled from 'styled-components';
import fundoDash from '../../assets/fundoDash.jpg';
import { Chart } from 'react-google-charts';

export const Container = styled.div`
  min-width: 100vw;
  max-width: 100vw;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  h1 {
    margin-top: 20px;
    font-size: 18px;
  }

  strong {
    color: #2dc7ff;
    opacity: 0.5;
    padding-bottom: 2px;
    border-bottom: 2px solid rgba(0, 0, 0, 0);
    font-size: 14px;
    transition: all 0.2s;
    margin-right: 4px;
  }
`;

export const Bottom = styled.div`
  bottom: 10px;
  width: 90%;
  padding: 30px;
  display: flex;
  margin-top: 50px;
`;

export const Box = styled.button`
  width: 120px;
  height: 120px;
  background: #2dc7ff;
  opacity: 0.5;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  transition: all 0.2s;
  border: 0;
`;

export const Unbox = styled.button`
  border: 0;
  background: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
  &:hover {
    strong {
      border-bottom: 2px solid #f76abc;
      opacity: 1;
    }

    button {
      opacity: 1;
    }
  }
`;

export const Top = styled.div`
  margin-top: 100px;
  border-radius: 4px;
`;

export const ChartForm = styled(Chart)`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  color: #fff;
`;
