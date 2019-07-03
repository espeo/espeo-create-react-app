import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { getLocalStorageServiceMock } from '@core/mocks';

import { MainComponent } from './main.component';

describe('Main Title Component', () => {
  test('should be defined', () => {
    const localStorageServiceMock = getLocalStorageServiceMock();
    const component = renderer.create(
      <MainComponent
        first={null}
        localStorageService={localStorageServiceMock}
        fetchFirst={jest.fn()}
      />,
    );
    expect(component).toBeDefined();
  });

  test('after mount component should be call fetchFirst action', () => {
    const localStorageServiceMock = getLocalStorageServiceMock();
    const spy = jest.fn();
    shallow(
      <MainComponent
        first={null}
        localStorageService={localStorageServiceMock}
        fetchFirst={spy}
      />,
    );

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  test('after click on button component should be call localStorage.set', () => {
    const localStorageServiceMock = getLocalStorageServiceMock();
    const spy = jest.spyOn(localStorageServiceMock, 'set');

    shallow(
      <MainComponent
        first={null}
        localStorageService={localStorageServiceMock}
        fetchFirst={jest.fn()}
      />,
    ).find('button').simulate('click');

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toBeCalledWith('key', '42');
    spy.mockRestore();
  });

});
