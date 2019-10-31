import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';

import { itemsService } from '@core/services/items';
import { MainComponentState } from '@core/pages/main/namespace/index';
import { MainActions } from '@core/pages/main/store/actions/index';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import { rootEpic } from './rootEpic';

export interface RootStore {
  main: MainComponentState;
}

const dependencies = {
  itemsService,
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

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [epicMiddleware, sagaMiddleware, logger];

export const rootStore = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware)),
);

sagaMiddleware.run(rootSaga);
epicMiddleware.run(rootEpic);
