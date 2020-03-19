import React, { ComponentClass } from 'react';
import { Route, Switch, RouteProps } from 'react-router-dom';
import { MainArticles, Article, NotFound } from '@core/pages';

type RouteName = 'home' | 'details' | 'not_found';

export const routesConfig: Record<RouteName, RouteProps> = {
  home: {
    path: '/',
    exact: true,
    component: MainArticles as ComponentClass,
  },
  details: {
    path: '/details/:article',
    component: Article,
  },
  not_found: {
    component: NotFound,
  },
};

export const AppRoutes = () => (
  <Switch>
    {Object.entries(routesConfig).map(([route, config]) => (
      <Route key={route} {...config} />
    ))}
  </Switch>
);
