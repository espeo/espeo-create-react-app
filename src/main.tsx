import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '@core/themes';
import { AppRoutes } from './app/app-routes';
import { rootStore } from './app/root-store';

import '@assets/styles/main.css';

import './polyfills';

ReactDOM.render(
  <Provider store={rootStore}>
    <ThemeProvider theme={defaultTheme}>
      <AppRoutes />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
