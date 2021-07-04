import React from 'react';
import { Home } from '../pages/Home';
import { Atendimento } from '../pages/Atendimento';
import { Gerencial } from '../pages/Gerencial';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


export function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/atendimento">
          <Atendimento />
        </Route>
        <Route path="/gerencial">
          <Gerencial />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}