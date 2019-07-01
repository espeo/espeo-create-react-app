import { Logic } from '@core/domain';
import { Action } from '@core/utils';

export enum SecondActionTypes {
  FETCH_SECOND = '[Second] Fetch Second',
  LOAD_SECOND = '[Second] Load Second',
  ERROR_SECOND = '[Second] Error Second',
}

export const fetchSecond = (): Action => ({
  type: SecondActionTypes.FETCH_SECOND,
  payload: null,
});

export const loadSecond = (payload: Logic): Action<Logic> => ({
  type: SecondActionTypes.LOAD_SECOND,
  payload,
});

export const errorSecond = (): Action => ({
  type: SecondActionTypes.ERROR_SECOND,
  payload: null,
});

export type SecondActions = Action<null | Logic>;
