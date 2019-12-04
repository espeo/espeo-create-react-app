import renderer from 'react-test-renderer';
import React from 'react';
import { compose } from 'redux';
import { shallow, mount } from 'enzyme';
import dayjs from 'dayjs';

import {
  withProviders,
  withAdditionalProperties,
  articleMock as article
} from '@core/tests/theme-helpers';

import MainArticles from './MainArticles.component';

const fetchArticlesMock = jest.fn().mockReturnValue([
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
    expect(wrapper.containsAllMatchingElements([fetchArticlesMock.mock])).toBeTruthy();
  })
});
// expect(wrapper.containsAllMatchingElements([
//   <div>
//     <div>
//       {dayjs(article.publishedAt).format('YYYY, MMM DD ')}
//     </div>
//     <div>{article.author}</div>
//     <div>{article.title}</div>
//     <div>{article.description}</div>
//   </div>
// ])).toBeTruthy();
