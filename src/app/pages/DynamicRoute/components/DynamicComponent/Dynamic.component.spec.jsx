import renderer from 'react-test-renderer';
import React from 'react';
import { compose } from 'redux';
import { shallow, mount } from 'enzyme';

import {
    withProviders,
} from '@core/tests/theme-helpers';

import DynamicComponent from './Dynamic.component';

const WrappedComponent = compose(
    withProviders
)(DynamicComponent);

describe('Dynamic component test suite', () => {
    it('should match snapshot', () => {
        const component = renderer.create(<WrappedComponent />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should mount component with children', () => {
        const text = 'Example content';
        const wrapper = mount(<WrappedComponent />);
        expect(wrapper.find('.example-content').text()).toEqual(text);
    });

    it('should render dynamic component', () => {
        const wrapper = shallow(<WrappedComponent />);
        expect(wrapper.contains('.dynamic-component'));
    });
});
