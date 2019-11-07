import { ReturnType } from '../../../../namespace';
// import { MainArticlesState } from '../../namespace';
import { FiltersProps } from '../saga/index';

export enum MainArticlesTypes {
  FETCH_ARTICLES = 'FETCH_ARTICLES',
  FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS',
  ERR_ARTICLES = 'ERR_ARTICLES',
  RELOAD_ARTICLES = 'RELOAD_ARTICLES',
  SORT_ARTICLES_FILTER = 'SORT_ARTICLES_FILTER',
}

export const fetchArticles = (page: number, filters?: FiltersProps) =>
  ({
    type: MainArticlesTypes.FETCH_ARTICLES,
    payload: { page, filters },
  } as const);

export const fetchArticlesSuccess = (payload: any) =>
  ({
    type: MainArticlesTypes.FETCH_ARTICLES_SUCCESS,
    payload,
  } as const);

export const errArticles = () =>
  ({
    type: MainArticlesTypes.ERR_ARTICLES,
  } as const);

export const reloadArticles = (payload: any) =>
  ({
    type: MainArticlesTypes.RELOAD_ARTICLES,
    payload,
  } as const);

export const filterArticles = (payload: FiltersProps) => ({
  type: MainArticlesTypes.SORT_ARTICLES_FILTER,
  payload,
});

export type MainActions =
  | ReturnType<typeof fetchArticles>
  | ReturnType<typeof fetchArticlesSuccess>
  | ReturnType<typeof errArticles>
  | ReturnType<typeof reloadArticles>
  | ReturnType<typeof filterArticles>;
