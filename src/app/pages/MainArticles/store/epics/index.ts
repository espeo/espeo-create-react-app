import { ActionsObservable, Epic } from 'redux-observable';
import {
  MainActions,
  MainArticlesTypes,
  fetchArticlesFailed,
  fetchArticlesSuccess
} from '../actions';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import { from, of } from 'rxjs';

import { RootStore } from '@core/store';
import { isOfType } from 'typesafe-actions';

export const executeGetItemsEpic: Epic<MainActions, MainActions, RootStore> = (
  action$: ActionsObservable<MainActions>,
  _state$,
  { getArticles },
) => {
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
