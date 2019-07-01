export const getData = <T extends { data: any }>(item: T): T['data'] => item.data;
