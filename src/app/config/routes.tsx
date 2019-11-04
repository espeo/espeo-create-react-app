import React, { ComponentClass } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainArtices from '@core/pages/MainArticles';

export const AppRoutes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={MainArtices as ComponentClass} />
    </Switch>
  </Router>
);
