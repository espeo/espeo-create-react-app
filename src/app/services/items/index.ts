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

class ItemsService {
  public getItems(payload: { id: number }): Observable<any> {
    const result = new Subject<any>();
    ApiService.get('/items', {
      id: payload.id,
    })
      .then((data: any) => {
        console.log(data);
        result.next(data.data);
        result.complete();
      })
      .catch(err => result.error(err));
    return result;
  }
}

export const itemsService = new ItemsService();
