import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Delivery from './pages/Delivery';

export default function Routes() {
  return (
    < BrowserRouter >
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/Delivery" component={Delivery} />
      </Switch>
    </BrowserRouter >
  );
}
