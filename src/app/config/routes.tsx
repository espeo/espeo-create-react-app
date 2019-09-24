import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import * as MainPage from './../pages/main';
import * as ExamplePage from './../pages/example';

export const AppRoutes = () => (
  <Router>
    <Switch>
      <Route path='/' exact={true} component={MainPage} />
      <Route path='/example' component={ExamplePage} />
    </Switch>
  </Router>
);
