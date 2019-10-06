import { all, fork } from 'redux-saga/effects';

import mainSaga from '@core/pages/main/store/saga';

export default function* rootSaga() {
  yield all([
    fork(mainSaga),
  ]);
}