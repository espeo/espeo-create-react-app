import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { IntlProvider, injectIntl } from 'react-intl';
import translationsEn from '@assets/i18n/en.json';

export const withThemeProvider = (theme: DefaultTheme) => {
  return (Component: any) => {
    return (props: any) => (
      <ThemeProvider theme={theme}>
        <Component {...props} />
      </ThemeProvider>
    );
  }
}

export const withIntlInjected = (WrappedComponent: any) => {
  const ComponentInjected = injectIntl(WrappedComponent);
  return (props: any) => (
    <IntlProvider locale="en" messages={translationsEn}>
      <ComponentInjected {...props} />;
    </IntlProvider>
  )
}

export const withAdditionalProperties = (additionalProps: any) => {
  return (Component: any) => {
    return (props: any) => (
      <Component {...props} {...additionalProps} />
    );
  }
}