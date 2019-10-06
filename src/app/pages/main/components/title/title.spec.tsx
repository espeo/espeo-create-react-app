import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { shallowWithTheme, withThemeProvider } from '@core/utils';
import { defaultTheme } from '@core/themes';

import { Title } from './title';

describe('Main Title Component', () => {

  let component: renderer.ReactTestRenderer;

  beforeEach(() => {
    component = renderer.create(withThemeProvider(<Title text='title' />, defaultTheme));
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
    const text = shallowWithTheme(<Title text='title' />, defaultTheme).children().text();
    expect(text).toEqual('title');
  });
});
