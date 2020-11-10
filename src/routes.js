import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Entregador from './pages/Entregador';
import PetShop from './pages/PetShop';
import Controle from './pages/Controle';
import Pedido from './pages/Pedido';
import Pacotes from './pages/Pacotes';
import Login from './pages/Login';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/Entregador" component={Entregador} />
      <Route path="/PetShop" component={PetShop} />
      <Route path="/Controle" component={Controle} />
      <Route path="/Pedido" component={Pedido} />
      <Route path="/Pacotes" component={Pacotes} />
      <Route path="/Login" component={Login} />
    </Switch>
  );
}
