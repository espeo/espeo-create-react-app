import { MainActions, MainArticlesTypes } from '../actions/index';
import { initial } from '../initial';
import { MainArticlesState } from '../../namespace';

export const mainArticlesReducer = (
  state = initial,
  action: MainActions,
): MainArticlesState => {
  switch (action.type) {
    case MainArticlesTypes.FETCH_ARTICLES:
      return {
        ...state,
        isLoading: true,
        page: action.payload.page,
      };
    case MainArticlesTypes.FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: [...state.data, action.payload.data.articles],
      };
    case MainArticlesTypes.ERR_ARTICLES:
      return {
        ...state,
        isErr: false,
      };
    case MainArticlesTypes.RELOAD_ARTICLES:
      return {
        ...state,
        isLoading: false,
        data: [...state.data, action.payload.data.articles],
      };
    case MainArticlesTypes.SORT_ARTICLES_FILTER:
      return {
        ...state,
        date: action.payload.date,
        sortBy: action.payload.sortBy,
        topic: action.payload.topic,
        page: 1,
      };
    default:
      return state;
  }
};
