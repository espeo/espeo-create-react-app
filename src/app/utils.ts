export const getData = <T extends { data: any }>(item: T): T['data'] =>
  item.data;

export type ReturnType<T> = T extends (...args: Array<any>) => infer R ? R : never;
