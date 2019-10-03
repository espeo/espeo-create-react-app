import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainView from './views/main/main.container';
import StateFulView from './views/stateful/stateful.container';

export const AppRoutes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={MainView} />
      <Route path="/stateful" component={StateFulView} />
    </Switch>
  </Router>
);
