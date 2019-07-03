export type ReturnType<T> = T extends (...args: Array<any>) => infer R ? R : never;
