import { createStore, combineReducers } from 'redux';

import { secondReducer } from '@core/store/second';
import { firstReducer } from '@core/store/first';

const rootReducer = combineReducers({
  first: firstReducer,
  second: secondReducer,
});

export const rootStore = createStore(
  rootReducer,
  // @ts-ignore
  window['__REDUX_DEVTOOLS_EXTENSION__'] && window['__REDUX_DEVTOOLS_EXTENSION__'](),
);
