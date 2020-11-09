import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Entregador from './pages/Entregador';
import Login from './pages/Login';
import PetShop from './pages/PetShop';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/Entregador" component={Entregador} />
      <Route path="/Login" component={Login} />
      <Route path="/PetShop" component={PetShop} />
    </Switch>
  );
}
