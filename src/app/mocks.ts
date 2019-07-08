import { RootStore } from './store';
import { LocalStorageService } from './services';

export const mockStore: RootStore = {
  first: {
    isLoading: false,
    isError: false,
    data: null,
  },
  second: {
    isLoading: false,
    isError: false,
    data: null,
  },
};

export const getLocalStorageServiceMock = () => ({
  get: (_key: string) => '42',
  set: (_key: string, _value: string) => {},
  remove: (_key: string) => {},
} as LocalStorageService);
