import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import createSagaMiddleware from 'redux-saga';

import { getArticles } from '@core/services';
import { MainArticlesState } from '@pages/MainArticles/namespace';
import { MainActions } from '@pages/MainArticles/store/actions';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import { rootEpic } from './rootEpic';

type chosenMiddlewareType = 'saga' | 'observable';
const chosenMiddleware: chosenMiddlewareType = 'saga' as chosenMiddlewareType;

export interface RootStore {
  main: MainArticlesState;
}

const dependencies = {
  getArticles
};
export type Dependencies = typeof dependencies;

const epicMiddleware = createEpicMiddleware<
  MainActions,
  MainActions,
  RootStore,
  Dependencies
>({
  dependencies,
});

const sagaMiddleware = createSagaMiddleware();

const usedMiddleware =
  chosenMiddleware === 'saga' ? sagaMiddleware : epicMiddleware;

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [usedMiddleware, logger];

export const rootStore = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware)),
);

if (chosenMiddleware === 'saga') {
  sagaMiddleware.run(rootSaga);
} else {
  epicMiddleware.run(rootEpic);
}
