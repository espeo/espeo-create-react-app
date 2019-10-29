import { FirstState } from './first';
import { SecondState } from './second';

// only reducers from ./store
export interface RootStore {
  first: FirstState;
  second: SecondState;
}

export * from './first';
export * from './first';
