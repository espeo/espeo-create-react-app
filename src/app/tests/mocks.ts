import { MainComponentState } from '../pages/main/namespace/index';

export interface RootStore {
  main: MainComponentState;
}

export const mockStore: RootStore = {
  main: {
    isLoading: false,
    error: false,
    items: null,
  },
};

export const getLocalStorageServiceMock = () => ({
  get: (_key: string) => '42',
  set: (_key: string, _value: string) => {},
  remove: (_key: string) => {},
});
