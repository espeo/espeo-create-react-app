import { all, takeLatest, put, call, fork } from 'redux-saga/effects';

import { getArticlesService } from '@core/services';
import {
  MainArticlesTypes,
  fetchArticlesSuccess,
  reloadArticles,
  fetchArticlesFailed,
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
    topic: payload.topic || 'sport',
    sortBy: payload.sortBy || '',
    date: payload.date || '',
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
    yield put(fetchArticlesFailed());
  }
}

function* filterSortArticles(action: { type: string; payload: FiltersProps }) {
  try {
    const { topic, sortBy, date } = getFilterProps(action.payload);
    const page = 1;
    const { data } = yield call(getArticlesService, page, topic, sortBy, date);
    yield put(reloadArticles(data));
  } catch (e) {
    yield put(fetchArticlesFailed());
  }
}

function* clearArticlesFilters() {
  try {
    const { data } = yield call(getArticlesService);
    yield put(reloadArticles(data));
  } catch (e) {
    yield put(fetchArticlesFailed());
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
