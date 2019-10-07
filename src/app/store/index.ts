import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import { createEpicMiddleware } from 'redux-observable';

import rootReducer from './rootReducer';
// import rootEpic from './rootEpic';
import rootSaga from './rootSaga';

// const epicMiddleware = createEpicMiddleware();
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [
  // epicMiddleware,
  sagaMiddleware,
];

export const rootStore = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware)),
);

// epicMiddleware.run(rootEpic);
sagaMiddleware.run(rootSaga);
