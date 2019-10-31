import { Observable, Subject } from 'rxjs';
import { ItemsList } from '@core/pages/main/namespace';
import ApiService from '../config';

// for Saga usage
export const getItemsService = (payload: { id: number }) => {
  return ApiService.get('/items', {
    id: payload.id,
  }).then((data: any) => {
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
