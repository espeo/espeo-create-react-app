import { Action, Logic } from '@core/domain';

export enum FirstActionTypes {
  FETCH_First = '[First] Fetch First',
  LOAD_First = '[First] Load First',
  ERROR_First = '[First] Error First',
}

export class FetchFirst implements Action {
  type = FirstActionTypes.FETCH_First;
  payload: null = null;
}

export class LoadFirst implements Action {
  type = FirstActionTypes.LOAD_First;
  constructor(public payload: Logic) {}
}

export class ErrorFirst implements Action {
  type = FirstActionTypes.ERROR_First;
  payload: null = null;
}

export type FirstActions = FetchFirst | LoadFirst | ErrorFirst;
