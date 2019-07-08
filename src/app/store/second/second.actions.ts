import { Logic } from '@core/domain';
import { ReturnType } from '@core/utils';

export enum SecondActionTypes {
  FETCH_SECOND = '[Second] Fetch Second',
  LOAD_SECOND = '[Second] Load Second',
  ERROR_SECOND = '[Second] Error Second',
}

export const fetchSecond = () => ({
  type: SecondActionTypes.FETCH_SECOND,
  payload: null,
} as const);

export const loadSecond = (payload: Logic) => ({
  type: SecondActionTypes.LOAD_SECOND,
  payload,
} as const);

export const errorSecond = () => ({
  type: SecondActionTypes.ERROR_SECOND,
  payload: null,
} as const);

export type SecondActions = ReturnType<typeof fetchSecond>
 | ReturnType<typeof loadSecond>
 | ReturnType<typeof errorSecond>;
