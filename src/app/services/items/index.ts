import ApiService from './../config';

export const getItemsService = async () => {
  return ApiService.request('get', 'items', {});
};

