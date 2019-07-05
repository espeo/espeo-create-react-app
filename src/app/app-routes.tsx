import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainView from './containers/main/main.container';
import StateFulView from './containers/stateful/stateful.container';

export const AppRoutes = () => (
  <Router basename='/react-dash'>
    <Switch>
      <Route path='/' component={MainView} />
      <Route path='/stateful' component={StateFulView} />
    </Switch>
  </Router>
);
