import { Logic } from '@core/domain';

import { FirstActions, FirstActionTypes } from './first.actions';

export interface FirstState {
  isLoading: boolean;
  isError: boolean;
  data: Logic | null;
}

const defaultState: FirstState = {
  isLoading: false,
  isError: false,
  data: null,
};

export const firstReducer = (state = defaultState, action: FirstActions): FirstState => {
  if (action.type === FirstActionTypes.FETCH_First) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === FirstActionTypes.LOAD_First) {
    return {
      ...state,
      isLoading: false,
      data: action.payload,
    };
  }
  if (action.type === FirstActionTypes.ERROR_First) {
    return {
      ...state,
      isError: false,
    };
  }

  return state;
};
