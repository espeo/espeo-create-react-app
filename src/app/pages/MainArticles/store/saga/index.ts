import { all, takeLatest, put, call, fork } from 'redux-saga/effects';

import { getArticlesService } from '@core/services/articles';
import {
  MainArticlesTypes,
  fetchArticlesSuccess,
  reloadArticles,
  errArticles,
} from '../actions';

export type dateValues = '' | 'today' | 'week' | 'month';

export interface FiltersProps {
  topic: string;
  sortBy: string;
  date: dateValues;
  page: number;
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
    yield put(errArticles());
  }
}

function* filterSortArticles(action: { type: string; payload: FiltersProps }) {
  try {
    const { topic, sortBy, date } = yield call(getFilterProps, action.payload);
    const { data } = yield call(getArticlesService, 1, topic, sortBy, date);
    yield put(reloadArticles(data));
  } catch (e) {
    yield put(errArticles());
  }
}

function* clearArticlesFilters() {
  try {
    const { data } = yield call(getArticlesService);
    yield put(reloadArticles(data));
  } catch (e) {
    yield put(errArticles());
  }
}

function* watchGetArticles() {
  yield takeLatest(MainArticlesTypes.FETCH_ARTICLES, getArticles);
}

function* watchFilterArticles() {
  yield takeLatest(MainArticlesTypes.SORT_ARTICLES_FILTER, filterSortArticles);
}

function* watchClearFilters() {
  yield takeLatest(MainArticlesTypes.CLEAR_FILTERS, clearArticlesFilters);
}

export default function* mainArticlesSaga() {
  yield all([
    fork(watchGetArticles),
    fork(watchFilterArticles),
    fork(watchClearFilters),
  ]);
}
