import { createStore, combineReducers } from 'redux';

import { secondReducer } from '@core/store/second';
import { firstReducer } from '@core/store/first';

import { statefulReducer } from '@core/containers/stateful/stateful-store/stateful.reducers';

const rootReducer = combineReducers({
  first: firstReducer,
  second: secondReducer,
  stateful: statefulReducer,
});

export const rootStore = createStore(
  rootReducer,
  // @ts-ignore
  window['__REDUX_DEVTOOLS_EXTENSION__'] && window['__REDUX_DEVTOOLS_EXTENSION__'](),
);
