import React, { ComponentClass } from 'react';
import { Route, Switch } from 'react-router-dom';
import { MainArticles, Article, NotFound } from '@core/pages';

export const AppRoutes = () => (
  <Switch>
    <Route path="/" exact component={MainArticles as ComponentClass} />
    <Route path="/details/:article" component={Article} />
    <Route component={NotFound} />
  </Switch>
);
