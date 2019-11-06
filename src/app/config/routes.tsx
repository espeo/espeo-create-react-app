import React, { ComponentClass } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainArtices from '@core/pages/MainArticles';
import Article from '@core/pages/Article/main';

export const AppRoutes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={MainArtices as ComponentClass} />
      <Route path="/details" component={Article} />
    </Switch>
  </Router>
);
