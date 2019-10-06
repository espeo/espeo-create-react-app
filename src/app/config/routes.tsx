import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import * as MainPage from '@core/pages/main';

export const AppRoutes = () => (
  <Router>
    <Switch>
      <Route path='/' exact={true} component={MainPage.default} />
    </Switch>
  </Router>
);
