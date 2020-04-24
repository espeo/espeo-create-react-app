import { from, of } from 'rxjs';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import { ActionsObservable, Epic } from 'redux-observable';
import { isOfType } from 'typesafe-actions';

import {
  MainActions,
  MainArticlesTypes,
  fetchArticlesFailed,
  fetchArticlesSuccess,
} from '../actions';

import { Dependencies, RootStore } from '@core/store';

export const executeGetItemsEpic: Epic<
  MainActions,
  MainActions,
  RootStore,
  Dependencies
> = (action$: ActionsObservable<MainActions>, _state$, { getArticles }) => {
  return action$.pipe(
    filter(isOfType(MainArticlesTypes.FETCH_ARTICLES)),
    switchMap(({ payload }) => {
      return from(getArticles(payload)).pipe(
        map((items: any) => fetchArticlesSuccess(items)),
        catchError(() => of(fetchArticlesFailed())),
      );
    }),
  );
};

export const articlesEpic = [executeGetItemsEpic];
