import { Logic } from '@core/domain';
import { ReturnType } from '@core/utils';

export enum StatefulActionTypes {
  FETCH_Stateful = '[Stateful] Fetch Stateful',
  LOAD_Stateful = '[Stateful] Load Stateful',
  ERROR_Stateful = '[Stateful] Error Stateful',
}

export const fetchStateful = () =>
  ({
    type: StatefulActionTypes.FETCH_Stateful,
    payload: null,
  } as const);

export const loadStateful = (payload: Logic) =>
  ({
    type: StatefulActionTypes.LOAD_Stateful,
    payload,
  } as const);

export const errorStateful = () =>
  ({
    type: StatefulActionTypes.ERROR_Stateful,
    payload: null,
  } as const);

export type StatefulActions =
  | ReturnType<typeof fetchStateful>
  | ReturnType<typeof loadStateful>
  | ReturnType<typeof errorStateful>;
