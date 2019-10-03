import { createStore, combineReducers } from 'redux';

import { secondReducer } from '@core/store/second';
import { firstReducer } from '@core/store/first';

import env from '@environments/environment';

import { statefulReducer } from './views/stateful/stateful-store/stateful.reducers';

const rootReducer = combineReducers({
  first: firstReducer,
  second: secondReducer,
  stateful: statefulReducer,
});

export const rootStore = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && !env.isProduction
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    : <T>(f: T) => f,
);
