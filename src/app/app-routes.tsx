import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainView from './ui/containers/main/main.container';
import StateFulView from './ui/containers/stateful/stateful.container';

export const AppRoutes = () => (
  <Router basename='/react-dash'>
    <Switch>
      <Route path='/' component={MainView} />
      <Route path='/stateful' component={StateFulView} />
    </Switch>
  </Router>
);
