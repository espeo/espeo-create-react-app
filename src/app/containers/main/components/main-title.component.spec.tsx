
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import { MainTitle } from './main-title.component';

describe('Main Title Component', () => {
  test('should be defined', () => {
    const component = renderer.create(<MainTitle text='title' />);
    expect(component).toBeDefined();
  });

  test('should match snapshot', () => {
    const component = renderer.create(<MainTitle text='title' />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should have proper styles', () => {
    const component = renderer.create(<MainTitle text='title' />);
    const tree = component.toJSON();
    expect(tree).toHaveStyleRule('color', 'palevioletred');
  });

  test('should render string from title attribute', () => {
    const text = shallow(<MainTitle text='title' />).children().text();
    expect(text).toEqual('title');
  });
});
