import React from 'react';
import { injectIntl, IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import { ThemeProvider } from 'styled-components';
import translationsEn from '@assets/i18n/en.json';
import { defaultTheme } from '@styles/themes';

const mockStore = configureMockStore([createSagaMiddleware()]);

const everything = require('../../../mocked-server/everything.json');

export const articleMock = everything.articles[0];

export const withProviders = (Component: any) => {
  const ComponentInjected = injectIntl(Component);

  return (props: any) => (
    <ThemeProvider theme={defaultTheme}>
      <IntlProvider locale="en" messages={translationsEn}>
        <ComponentInjected {...props} />
      </IntlProvider>
    </ThemeProvider>
  );
};

export const withAdditionalProperties = (additionalProps: any) => {
  return (Component: any) => {
    const injStore = mockStore(additionalProps.store);

    return (props: any) => (
      <Provider store={injStore}>
        <Component {...props} {...additionalProps} />
      </Provider>
    );
  };
};
