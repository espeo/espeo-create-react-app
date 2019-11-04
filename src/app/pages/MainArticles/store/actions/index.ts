import { ReturnType } from '../../../../namespace';
// import { MainArticlesState } from '../../namespace';
import { FiltersProps } from '../saga/index';

export enum MainArticlesTypes {
  FETCH_ARTICLES = 'FETCH_ARTICLES',
  FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS',
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

export type MainActions =
  | ReturnType<typeof fetchArticles>
  | ReturnType<typeof fetchArticlesSuccess>;
