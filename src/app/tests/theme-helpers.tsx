import React from 'react';
import { ThemeProvider } from 'styled-components';
import { IntlProvider, injectIntl } from 'react-intl';
import translationsEn from '@assets/i18n/en.json';
import { defaultTheme } from '@styles/themes';

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
    return (props: any) => <Component {...props} {...additionalProps} />;
  };
};
