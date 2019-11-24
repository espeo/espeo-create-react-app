// import getArticlesService from '@core/services/articles';
import { of, from } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { ofType, Epic } from 'redux-observable';
import { RootStore, Dependencies } from '@core/store';

import {
  MainArticlesTypes,
  fetchArticlesSuccess,
  fetchArticlesFailed,
} from '../actions';

const executeGetItemsEpic: Epic<any, any, RootStore, Dependencies> = (
  action$,
  _state$,
  { getArticlesService },
) => {
  return action$.pipe(
    ofType(MainArticlesTypes.FETCH_ARTICLES),
    switchMap(({ payload }) => {
      return from(getArticlesService(payload)).pipe(
        map((items: any) => fetchArticlesSuccess(items)),
        catchError(() => of(fetchArticlesFailed())),
      );
    }),
  );
};

export const articlesEpic = [executeGetItemsEpic];
