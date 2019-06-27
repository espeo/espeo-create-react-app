import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainComponent from './components/main/main.component';

export const AppRoutes = () => (
  <Router basename='/react-dash'>
    <Switch>
      <Route path='/' component={MainComponent} />
    </Switch>
  </Router>
);
