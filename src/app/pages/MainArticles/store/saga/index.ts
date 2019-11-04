import { all, takeLatest, put, call } from 'redux-saga/effects';
// import { SagaIterator } from 'redux-saga';

import { getArticlesService } from '../../../../services/articles';
import { MainArticlesTypes, fetchArticlesSuccess } from '../actions';

export type dateValues = '' | 'today' | 'week' | 'month';

export interface FiltersProps {
  topic: string;
  sortBy: string;
  date: dateValues;
}

const getFilterProps = (payload: any) => {
  return {
    topic: payload.topic || undefined,
    sortBy: payload.sortBy || undefined,
    date: payload.date || undefined,
  };
};

function* getArticles(action: {
  payload: { page: number; filters: any };
  type: string;
}) {
  try {
    const { page } = action.payload;
    const { topic, sortBy, date } = getFilterProps(action.payload.filters);
    const data = yield call(getArticlesService, page, topic, sortBy, date);
    yield put(fetchArticlesSuccess(data));
  } catch (e) {
    console.log(e);
  }
}

export default function* mainArticlesSaga() {
  yield all([takeLatest(MainArticlesTypes.FETCH_ARTICLES, getArticles)]);
}
