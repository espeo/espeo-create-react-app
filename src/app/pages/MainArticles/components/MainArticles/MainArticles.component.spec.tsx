import renderer from 'react-test-renderer';
import React from 'react';
import { compose } from 'redux';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

import {
  withProviders,
  withAdditionalProperties,
  articleMock as article,
} from '@core/tests/theme-helpers';

import MainArticles from '@core/pages/MainArticles';
import { ArticleWrapper } from './MainArticles.style';

const fetchArticlesMock = jest
  .fn()
  .mockReturnValue({ data: [article, article, article, article, article] });

const WrappedComponent = compose(
  withProviders,
  withAdditionalProperties({
    fetchArticles: fetchArticlesMock,
    store: {
      articles: fetchArticlesMock(),
    },
  }),
)(MainArticles);

let wrapper: any;

beforeEach(() => {
  wrapper = mount(
    <BrowserRouter>
      <WrappedComponent />
    </BrowserRouter>,
  );
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('Articles component test suite', () => {
  it('should match snapshot', () => {
    const component = renderer.create(
      <BrowserRouter>
        <WrappedComponent />
      </BrowserRouter>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should fetch articles', () => {
    expect(wrapper.find(<ArticleWrapper />)).toBeTruthy();
    expect(fetchArticlesMock.mock.calls.length).toBe(0);
  });

  it('should mount component with children', () => {
    const text = 'Time for new information';
    expect(wrapper.find('h1').text()).toEqual(text);
  });

  it('should render articles component', () => {
    expect(wrapper.find('.main-page')).toBeTruthy();
  });

  it('should have these five nodes when mounting', () => {
    expect(wrapper.find(<ArticleWrapper />)).toBeTruthy();
    expect(fetchArticlesMock.mock.calls.length).toBe(0);
    expect(wrapper.find(ArticleWrapper).length).toEqual(5);
  });
});
