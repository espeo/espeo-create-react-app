import ApiService from '../config';

export const getItemsService = (payload: { id: number }) => {
  return ApiService.get('/items', {
    id: payload.id,
  }).then((data: any) => {
    return data.data;
  });
};
