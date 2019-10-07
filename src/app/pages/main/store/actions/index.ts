import { ReturnType } from '@core/namespace';

export enum MainActionTypes {
  LOAD_ITEMS = 'LOAD_ITEMS',
  LOAD_ITEMS_SUCCESS = 'LOAD_ITEMS_SUCCESS',
  LOAD_ITEMS_FAILED = 'LOAD_ITEMS_FAILED',
}

export const loadItems = () =>
  ({
    type: MainActionTypes.LOAD_ITEMS,
    payload: null,
  } as const);

export const loadItemsSuccess = (payload: any) =>
  ({
    type: MainActionTypes.LOAD_ITEMS_SUCCESS,
    payload,
  } as const);

export const loadItemsFailed = () =>
  ({
    type: MainActionTypes.LOAD_ITEMS_FAILED,
    payload: null,
  } as const);

export type MainActions =
  | ReturnType<typeof loadItems>
  | ReturnType<typeof loadItemsSuccess>
  | ReturnType<typeof loadItemsFailed>;
