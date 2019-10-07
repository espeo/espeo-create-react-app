import { MainActions, MainActionTypes } from '../actions';
import { initial } from '../initial';
import { MainComponentState } from '../../namespace';

export const mainPageReducer = (
  state = initial,
  action: MainActions,
): MainComponentState => {
  switch (action.type) {
    case MainActionTypes.LOAD_ITEMS:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case MainActionTypes.LOAD_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        isLoading: false,
      };
    case MainActionTypes.LOAD_ITEMS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};
