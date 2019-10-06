import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '@core/styles/themes';
import { AppRoutes } from '@core/config/routes';
import { rootStore } from '@core/store';

// place to import external css files
import '@assets/external-styles/main.css';

ReactDOM.render(
  <Provider store={rootStore}>
    <ThemeProvider theme={defaultTheme}>
      <AppRoutes />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
