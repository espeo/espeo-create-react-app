export type ReturnType<T> = T extends (...args: Array<any>) => infer R
  ? R
  : never;

export type Omit<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P];
};

export interface Response<T extends { id: string }> {
  id: string;
  data: Omit<T, 'id'>;
}

export interface Dict<T> {
  [key: string]: T;
}

export type ReadOnly<T extends object> = {
  readonly [K in keyof T]: T[K];
};
