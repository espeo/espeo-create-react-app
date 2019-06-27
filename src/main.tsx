import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { AppRoutes } from './app/app-routes';

import './polyfills';

ReactDOM.render(
  // <Provider store={store}>
  <AppRoutes />,
  // </Provider>,
  document.getElementById('root'),
);
