import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import { shallowWithTheme, withThemeProvider } from '../../../../utils';
import { MainTitle } from './main-title.component';
import { defaultTheme } from '../../../theme/defaultTheme';

describe('Main Title Component', () => {

  let component: renderer.ReactTestRenderer;

  beforeEach(() => {
    component = renderer.create(withThemeProvider(<MainTitle text='title' />, defaultTheme));
  });

  test('should be defined', () => {
    expect(component).toBeDefined();
  });

  test('should match snapshot', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should have proper styles', () => {
    const tree = component.toJSON();
    expect(tree).toHaveStyleRule('color', defaultTheme.colors.violet);
  });

  test('should render string from title attribute', () => {
    const text = shallowWithTheme(<MainTitle text='title' />, defaultTheme).children().text();
    expect(text).toEqual('title');
  });
});
