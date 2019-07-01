import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { AppRoutes } from './app/app-routes';
import { store } from './app/store';

import './polyfills';

import './assets/styles/main.css';

ReactDOM.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>,
  document.getElementById('root'),
);
