import { RootStore } from './../../store/index';
import {TestScheduler} from "rxjs/testing";
import { Action } from 'redux';
import { ActionsObservable, StateObservable } from 'redux-observable';

export type ReturnType<T> = T extends (...args: Array<any>) => infer R
  ? R
  : never;

export type Omit<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P];
};

export interface Dict<T> {
  [key: string]: T;
}

export type ReadOnly<T extends object> = {
  readonly [K in keyof T]: T[K];
};
