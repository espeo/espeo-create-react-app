import { Action, Logic } from '@core/domain';

export enum SecondActionTypes {
  FETCH_SECOND = '[Second] Fetch Second',
  LOAD_SECOND = '[Second] Load Second',
  ERROR_SECOND = '[Second] Error Second',
}

export class FetchSecond implements Action {
  type = SecondActionTypes.FETCH_SECOND;
  payload: null = null;
}

export class LoadSecond implements Action {
  type = SecondActionTypes.LOAD_SECOND;
  constructor(public payload: Logic) {}
}

export class ErrorSecond implements Action {
  type = SecondActionTypes.ERROR_SECOND;
  payload: null = null;
}

export type SecondActions = FetchSecond | LoadSecond | ErrorSecond;
