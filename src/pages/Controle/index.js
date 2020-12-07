import React, { useState, useEffect } from 'react';
import { BsBarChartFill, BsPieChartFill } from 'react-icons/bs';
import { RiBarChartFill } from 'react-icons/ri';
import { vendas } from '../../data/data';
import { Container, Box, Bottom, Unbox, Top, ChartForm } from './styles';
import HeaderLateral from '../../components/HeaderLateral';
import { useLocation } from 'react-router-dom';
function Controle() {
  const [visible, setVisible] = useState(true);
  const location = useLocation();
  const [empresa, setEmpresa] = useState('');

  useEffect(() => {
    let id = location.state.id;
    setEmpresa(id);
  }, []);

  function handleToggleVisible() {
    setVisible(!visible);
  }
  return (
    <>
      <HeaderLateral empresa={empresa} />
      <Container>
        <Top>
          <ChartForm
            visible={visible}
            width={400}
            height={280}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={vendas}
            options={{
              title: 'Vendas Diárias',
              chartArea: { width: '80%' },
              backgroundColor: 'none',
              hAxis: {
                title: 'Total de Vendas',
                minValue: 0,
              },
              vAxis: {
                title: 'Vendas',
              },
            }}
            legendToggle
          />
        </Top>
        <Bottom>
          <Unbox>
            <Box>
              <BsPieChartFill color="#fff" size={40} />
            </Box>
            <strong>Vendas Diárias</strong>
          </Unbox>
          <Unbox>
            <Box>
              <BsBarChartFill color="#fff" size={40} />
            </Box>
            <strong>Vendas Mensais</strong>
          </Unbox>
          <Unbox>
            <Box onClick={handleToggleVisible}>
              <RiBarChartFill color="#fff" size={40} />
            </Box>
            <strong>Vendas Anuais</strong>
          </Unbox>
        </Bottom>
      </Container>
    </>
  );
}
export default Controle;
