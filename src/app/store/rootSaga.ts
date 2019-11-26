import { all, fork } from 'redux-saga/effects';

import mainArticlesSaga from '@core/pages/MainArticles/store/saga';

export default function* rootSaga() {
  yield all([fork(mainArticlesSaga)]);
}
