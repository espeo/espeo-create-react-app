import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { ofType, Epic } from 'redux-observable';
import { Dependencies } from '@core/store/index';

import { MainActionTypes, loadItemsFailed, loadItemsSuccess } from '../actions';

const executeGetItemsEpic: Epic<any, any, any, Dependencies> = (
  action$,
  _state$,
  { itemsService: { getItems } },
) => {
  return action$.pipe(
    ofType(MainActionTypes.LOAD_ITEMS),
    switchMap(({ payload }) => {
      return getItems(payload).pipe(
        map((items: { items: { id: number; name: string }[] }) =>
          loadItemsSuccess(items),
        ),
        catchError(() => of(loadItemsFailed())),
      );
    }),
  );
};

export const mainEpic = [executeGetItemsEpic];
