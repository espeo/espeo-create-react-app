import { ReturnType } from '../../../../namespace';
import { FiltersProps } from '../saga/index';

export enum MainArticlesTypes {
  FETCH_ARTICLES = 'FETCH_ARTICLES',
  FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS',
  FETCH_ARTICLES_FAILED = 'FETCH_ARTICLES_FAILED',
  RELOAD_ARTICLES = 'RELOAD_ARTICLES',
  SORT_ARTICLES_FILTER = 'SORT_ARTICLES_FILTER',
  CLEAR_FILTERS = 'CLEAR_FILTERS',
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

export const fetchArticlesFailed = () =>
  ({
    type: MainArticlesTypes.FETCH_ARTICLES_FAILED,
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

export const clearArticlesFilters = () =>
  ({
    type: MainArticlesTypes.CLEAR_FILTERS,
  } as const);

export type MainActions =
  | ReturnType<typeof fetchArticles>
  | ReturnType<typeof fetchArticlesSuccess>
  | ReturnType<typeof fetchArticlesFailed>
  | ReturnType<typeof reloadArticles>
  | ReturnType<typeof filterArticles>
  | ReturnType<typeof clearArticlesFilters>;
