import { ReturnType } from '@core/namespace';
import { MainComponentState } from '../../namespace';

export enum MainActionTypes {
  LOAD_ITEMS = 'LOAD_ITEMS',
  LOAD_ITEMS_SUCCESS = 'LOAD_ITEMS_SUCCESS',
  LOAD_ITEMS_FAILED = 'LOAD_ITEMS_FAILED',
}

export const loadItems = (payload: { id: number }) =>
  ({
    type: MainActionTypes.LOAD_ITEMS,
    payload,
  } as const);

export type LoadItemsAction = ReturnType<typeof loadItems>;

export const loadItemsSuccess = (payload: {
  items: MainComponentState['items'];
}) =>
  ({
    type: MainActionTypes.LOAD_ITEMS_SUCCESS,
    payload,
  } as const);

export const loadItemsFailed = () =>
  ({
    type: MainActionTypes.LOAD_ITEMS_FAILED,
  } as const);

export type MainActions =
  | LoadItemsAction
  | ReturnType<typeof loadItemsSuccess>
  | ReturnType<typeof loadItemsFailed>;
