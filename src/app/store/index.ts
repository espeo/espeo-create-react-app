import { createStore, combineReducers } from 'redux';

import { secondReducer, SecondState } from '@core/store/second';
import { firstReducer, FirstState } from '@core/store/first';

import { examplePageReducer } from '@core/pages/example/store/reducers';

export interface RootStore {
  first: FirstState;
  second: SecondState;
}

const rootReducer = combineReducers({
  first: firstReducer,
  second: secondReducer,
  example: examplePageReducer,
});

export const rootStore = createStore(
  rootReducer,
  // @ts-ignore
  window['__REDUX_DEVTOOLS_EXTENSION__'] && window['__REDUX_DEVTOOLS_EXTENSION__'](),
);
