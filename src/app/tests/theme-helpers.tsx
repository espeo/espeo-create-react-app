import React from 'react';
import { ThemeProvider } from 'styled-components';
import { IntlProvider, injectIntl } from 'react-intl';
import translationsEn from '@assets/i18n/en.json';
import { defaultTheme } from '@styles/themes';

export const articleMock = {
  author: 'author',
  content: 'content',
  description: 'description',
  publishedAt: 'publishedAt',
  source: {
    id: 'id',
    name: 'name',
  },
  id: 'id',
  name: 'name',
  title: 'title',
  url: 'url',
  urlToImage: 'urlToImage',
};

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
