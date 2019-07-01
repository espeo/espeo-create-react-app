import { Action } from './domain/common';
export const getData = <T extends { data: any }>(item: T): T['data'] =>
  item.data;

export interface Action<T = null> {
  type: string;
  payload: T;
}
