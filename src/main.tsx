import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { AppRoutes } from './app/app-routes';
import { rootStore } from './app/root-store';
import { defaultTheme } from './app/ui/theme/defaultTheme';

import './polyfills';

import './assets/styles/main.css';

ReactDOM.render(
  <Provider store={rootStore}>
    <ThemeProvider theme={defaultTheme}>
      <AppRoutes/>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
