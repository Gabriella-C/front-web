import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Entregador from './pages/Entregador';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/Entregador" component={Entregador} />
    </Switch>
  );
}
