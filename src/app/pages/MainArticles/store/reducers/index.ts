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
    default:
      return state;
  }
};
