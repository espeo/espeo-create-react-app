import React, { ComponentClass, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import MainArticles from '@core/pages/MainArticles';
import Article from '@core/pages/Article/components/ArticleComponent/Article.component';

const MyDynamicRoute = React.lazy(() =>
  import(/* webpackChunkName: "dynamic-route" */ '@core/pages/DynamicRoute'),
);

export const AppRoutes = () => (
  <Switch>
    <Route path="/" exact component={MainArticles as ComponentClass} />
    <Route path="/details/:article" component={Article} />
    <Suspense fallback={<div>Loading</div>}>
      <Route exact path="/dynamic-route" component={MyDynamicRoute as any} />
    </Suspense>
  </Switch>
);
