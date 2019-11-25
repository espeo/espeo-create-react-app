import React, { ComponentClass, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPage from '@core/pages/main';

const MyDynamicRoute = React.lazy(() =>
  import(
    /* webpackChunkName: "dynamic-route" */ '@core/pages/dynamic-route/dynamic-route'
  ),
);

export const AppRoutes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={MainPage as ComponentClass} />
      <Suspense fallback={<div>Loading</div>}>
        <Route exact path="/dynamic-route" component={MyDynamicRoute as any} />
      </Suspense>
    </Switch>
  </Router>
);
