import { Logic } from '@core/domain';
import { ReturnType } from '@core/utils';

export enum FirstActionTypes {
  FETCH_First = '[First] Fetch First',
  LOAD_First = '[First] Load First',
  ERROR_First = '[First] Error First',
}

export const fetchFirst = () => ({
  type: FirstActionTypes.FETCH_First,
  payload: null,
} as const);

export const loadFirst = (payload: Logic) => ({
  type: FirstActionTypes.LOAD_First,
  payload,
} as const);

export const errorFirst = () => ({
  type: FirstActionTypes.ERROR_First,
  payload: null,
} as const);

export type FirstActions = ReturnType<typeof fetchFirst>
 | ReturnType<typeof loadFirst>
 | ReturnType<typeof errorFirst>;
