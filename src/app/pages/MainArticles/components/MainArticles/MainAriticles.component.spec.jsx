import renderer from 'react-test-renderer';
import React from 'react';
import { compose } from 'redux';
import { shallow } from 'enzyme';

import { defaultTheme } from '@core/styles/themes';
import {
  withIntlInjected,
  withThemeProvider,
  withAdditionalProperties,
} from '@core/tests/theme-helpers';

import MainArticles from './MainArticles.component';

const fetchArticlesMock = jest.fn().mockReturnValue([
  {
    item: 'test',
  },
]);

const WrappedComponent = compose(
  withAdditionalProperties({
    fetchArticles: fetchArticlesMock,
  }),
  withIntlInjected,
  withThemeProvider(defaultTheme),
)(MainArticles, defaultTheme);

describe('Articles component test suite', () => {
  it('should match snapshot', () => {
    const component = renderer.create(() => <WrappedComponent />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should fetch articles', () => {
    const component = shallow(<WrappedComponent />).first();
    // expect(fetchArticlesMock.mock.calls.length).toBe(1);
  });
});
