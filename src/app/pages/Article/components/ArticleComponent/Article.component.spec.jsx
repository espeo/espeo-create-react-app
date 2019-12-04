import renderer from 'react-test-renderer';
import React from 'react';
import { compose } from 'redux';
import { shallow, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

import {
    withProviders,
    withAdditionalProperties,
} from '@core/tests/theme-helpers';

import Article from './Article.component';

const locationMock = {
    state: {
        article: {
            author: 'author',
            content: 'content',
            description: 'description',
            publishedAt: 'publishedAt',
            source: {
                id: 'id',
                name: 'name',
            },
            id: 'id',
            name: 'name',
            title: 'title',
            url: 'url',
            urlToImage: 'urlToImage',
        }
    }
};

const WrappedComponent = compose(
    withProviders,
    withAdditionalProperties({
        location: locationMock
    })
)(Article);

describe('Article component test suite', () => {
    it('should match snapshot', () => {
        const component = renderer.create(<BrowserRouter><WrappedComponent /></BrowserRouter>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should mount article with children', () => {
        const text = 'Article Details';
        const wrapper = mount(<BrowserRouter><WrappedComponent /></BrowserRouter>);
        expect(wrapper.find('h1').text()).toEqual(text);
    });

    it('should render article component', () => {
        const wrapper = shallow(<WrappedComponent />);
        expect(wrapper.contains('.article'));
      });
});
