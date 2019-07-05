export type ReturnType<T> = T extends (...args: Array<any>) => infer R ? R : never;

export interface Response<T extends { id: string }> {
  id: string;
  data: Omit<T, 'id'>;
}
