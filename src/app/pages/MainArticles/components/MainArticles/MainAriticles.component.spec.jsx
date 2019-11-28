import renderer from 'react-test-renderer';
import React from 'react';
import { compose } from 'redux';
import { shallow, mount } from 'enzyme';

import {
  withProviders,
  withAdditionalProperties,
} from '@core/tests/theme-helpers';

import MainArticles from './MainArticles.component';

const fetchArticlesMock = jest.fn().mockReturnValue([
  {
    item: 'test',
  },
]);

const WrappedComponent = compose(
  withProviders,
  withAdditionalProperties({
    fetchArticles: fetchArticlesMock,
  }),
)(MainArticles);

describe('Articles component test suite', () => {
  it('should match snapshot', () => {
    const component = renderer.create(<WrappedComponent />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should fetch articles', () => {
    shallow(<WrappedComponent />);
    expect(fetchArticlesMock.mock.calls.length).toBe(1);
  });

  it('should mount articles', () => {
    mount(<WrappedComponent />);
    // TODO - some test with mounting
  });
});
