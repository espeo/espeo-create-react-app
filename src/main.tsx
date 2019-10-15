import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';

import translationsEn from '@assets/i18n/en.json';

import { defaultTheme } from '@core/styles/themes';
import { AppRoutes } from '@core/config/routes';
import { rootStore } from '@core/store';

import '@assets/external-styles/main.css';

addLocaleData([...en]);

interface Translations {
  en: any;
  [key: string]: any;
}

const translations: Translations = {
  en: translationsEn,
};

const locale = 'en';

console.log(process.env);
ReactDOM.render(
  <Provider store={rootStore}>
    <IntlProvider locale={locale} messages={translations[locale]}>
      <ThemeProvider theme={defaultTheme}>
        <AppRoutes />
      </ThemeProvider>
    </IntlProvider>
  </Provider>,
  document.getElementById('root'),
);
