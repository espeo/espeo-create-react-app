import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { AppRoutes } from '@core/config/routes';
import { rootStore } from '@core/store';
import { defaultTheme } from '@core/themes';

// place to import external css files
import '@assets/external-styles/main.css';

ReactDOM.render(
  <Provider store={rootStore}>
    <ThemeProvider theme={defaultTheme}>
      <AppRoutes/>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
