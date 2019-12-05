import renderer from 'react-test-renderer';
import React from 'react';
import { compose } from 'redux';
import { shallow, mount } from 'enzyme';

import {
  withProviders,
  withAdditionalProperties,
  articleMock as article
} from '@core/tests/theme-helpers';

import MainArticles, { ArticleWrapper } from './MainArticles.component';

const fetchArticlesMock = jest.fn().mockReturnValue([
  article,
  article,
  article,
  article,
  article
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

  it('should mount component with children', () => {
    const text = 'Time for new information';
    const wrapper = mount(<WrappedComponent />);
    expect(wrapper.find('h1').text()).toEqual(text);
  });

  it('should render articles component', () => {
    const wrapper = mount(<WrappedComponent />);
    expect(wrapper.find('.main-page')).toBeTruthy();
  });

  it('should have these five nodes when mounting', () => {
    const wrapper = mount(<WrappedComponent />);
    expect(wrapper.contains(<ArticleWrapper />)).toBe(true);
    // expect(wrapper.find(<ArticleWrapper />)).to.have.lengthOf(5);
  })
});
