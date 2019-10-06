import { combineReducers, Reducer } from 'redux';

import { mainPageReducer } from '@core/pages/main/store/reducers';

const rootReducer: Reducer = combineReducers({
  main: mainPageReducer,
});

export default rootReducer;