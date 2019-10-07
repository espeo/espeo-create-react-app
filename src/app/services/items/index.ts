import ApiService from '../config';

export const getItemsService = (payload: { id: number }) => {
  console.log(payload);
  return ApiService.request('get', 'items', {});
};
