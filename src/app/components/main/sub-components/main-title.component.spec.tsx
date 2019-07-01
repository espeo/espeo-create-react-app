import { MainTitle } from './main-title.component';

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

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

  test('should render string from title attribute', () => {
    const text = shallow(<MainTitle text='title' />).find('h1').text();
    expect(text).toEqual('title');
  });
});
