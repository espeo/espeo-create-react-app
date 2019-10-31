import { ItemsList } from '@core/pages/main/namespace/index';
import ApiService from '../config';
import { Observable, Subject } from 'rxjs';

export const getItemsService = (payload: { id: number }) => {
  console.log('getItemsService payload: ', payload);
  return ApiService.get('/items', {
    id: payload.id,
  }).then((data: any) => {
    console.log('get items data ', data);
    return data.data;
  });
};

// for Epic usage
class ItemsService {
  public getItems(payload: { id: number }): Observable<ItemsList> {
    const result = new Subject<ItemsList>();
    ApiService.get('/items', {
      id: payload.id,
    })
      .then((data: any) => {
        result.next(data.data);
        result.complete();
      })
      .catch(err => result.error(err));
    return result;
  }
}

export const itemsService = new ItemsService();
