import { Logic } from '@core/domain/logic';
import { SecondActions, SecondActionTypes } from './second.actions';

export interface SecondState {
  isLoading: boolean;
  isError: boolean;
  data: Logic | null;
}

const defaultState: SecondState = {
    isLoading: false,
    isError: false,
    data: null,
};

export const secondReducer = function(state = defaultState, action: SecondActions): SecondState {
  if (action.type === SecondActionTypes.FETCH_SECOND) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === SecondActionTypes.LOAD_SECOND) {
    return {
      ...state,
      isLoading: false,
      data: action.payload,
    };
  }
  if (action.type === SecondActionTypes.ERROR_SECOND) {
    return {
      ...state,
      isError: false,
    };
  }

  return state;
};
