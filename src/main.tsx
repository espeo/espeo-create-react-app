import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { addLocaleData, IntlProvider} from 'react-intl';
import en from 'react-intl/locale-data/en';

import translationsEn from '@assets/i18n/en.json';


import { defaultTheme } from '@core/styles/themes';
import { AppRoutes } from '@core/config/routes';
import { rootStore } from '@core/store';

// place to import external css files
import '@assets/external-styles/main.css';

addLocaleData([...en]);

interface ITranslations {
  en: any;
  [key: string]: any;
}

const translations: ITranslations = {
  en: translationsEn,
};

const locale = 'en';

ReactDOM.render(
  <Provider store={rootStore}>
    <IntlProvider
      locale={locale}
      messages={translations[locale]}
    >
      <ThemeProvider theme={defaultTheme}>
        <AppRoutes />
      </ThemeProvider>
    </IntlProvider>
  </Provider>,
  document.getElementById('root'),
);
