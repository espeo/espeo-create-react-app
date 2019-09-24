import { Logic } from '@core/namespace';

import { StatefulActions, StatefulActionTypes } from './actions';

export interface StatefulState {
  isLoading: boolean;
  isError: boolean;
  data: Logic | null;
}

const defaultState: StatefulState = {
  isLoading: false,
  isError: false,
  data: null,
};

export const examplePageReducer = (state = defaultState, action: StatefulActions): StatefulState => {
  if (action.type === StatefulActionTypes.FETCH_Stateful) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === StatefulActionTypes.LOAD_Stateful) {
    return {
      ...state,
      isLoading: false,
      data: action.payload,
    };
  }
  if (action.type === StatefulActionTypes.ERROR_Stateful) {
    return {
      ...state,
      isError: false,
    };
  }

  return state;
};
