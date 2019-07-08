import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { getLocalStorageServiceMock } from '../../../mocks';
import { shallowWithTheme, withThemeProvider } from '../../../utils';
import { defaultTheme } from '../../theme/defaultTheme';

import { MainComponent } from './main.component';

describe('Main Title Component', () => {
  test('should be defined', () => {
    const localStorageServiceMock = getLocalStorageServiceMock();
    const component = renderer.create(
      withThemeProvider(<MainComponent
        first={null}
        localStorageService={localStorageServiceMock}
        fetchFirst={jest.fn()}
      />, defaultTheme),
    );
    expect(component).toBeDefined();
  });

  test('after mount component should be call fetchFirst action', () => {
    const localStorageServiceMock = getLocalStorageServiceMock();
    const spy = jest.fn();
    shallowWithTheme(
      <MainComponent
        first={null}
        localStorageService={localStorageServiceMock}
        fetchFirst={spy}
      />,
      defaultTheme,
    );

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  test('after click on button component should be call localStorage.set', () => {
    const localStorageServiceMock = getLocalStorageServiceMock();
    const spy = jest.spyOn(localStorageServiceMock, 'set');

    shallowWithTheme(
      <MainComponent
        first={null}
        localStorageService={localStorageServiceMock}
        fetchFirst={jest.fn()}
      />,
      defaultTheme,
    ).find('button').simulate('click');

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toBeCalledWith('key', '42');
    spy.mockRestore();
  });

});
