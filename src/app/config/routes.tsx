import React, { ComponentClass } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPage from '@core/pages/main';

export const AppRoutes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={MainPage as ComponentClass} />
    </Switch>
  </Router>
);
