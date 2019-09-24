import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { shallow } from 'enzyme';

export const shallowWithTheme = (component: React.ReactElement, theme: DefaultTheme) => {
  return shallow(component, {
    context: theme,
  });
};

export const withThemeProvider = (component: React.ReactElement, theme: DefaultTheme) => (
  <ThemeProvider theme={theme}>
    {component}
  </ThemeProvider>
);
