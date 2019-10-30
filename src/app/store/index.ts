import { createStore, applyMiddleware, compose } from 'redux';
// import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';

import { itemsService } from '@core/services/items';

import rootReducer from './rootReducer';
// import rootSaga from './rootSaga';
import { rootEpic } from './rootEpic';

const dependencies = {
  itemsService,
};
export type Dependencies = typeof dependencies;
const epicMiddleware = createEpicMiddleware({
  dependencies,
});

// const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [epicMiddleware, logger];

export const rootStore = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware)),
);

// sagaMiddleware.run(rootSaga);
epicMiddleware.run(rootEpic);
