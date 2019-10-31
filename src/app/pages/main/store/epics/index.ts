import { RootStore, Dependencies } from '@core/store';
import { ItemsList } from '@core/pages/main/namespace';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { ofType, Epic } from 'redux-observable';

import { MainActionTypes, loadItemsFailed, loadItemsSuccess } from '../actions';

const executeGetItemsEpic: Epic<any, any, RootStore, Dependencies> = (
  action$,
  _state$,
  { itemsService: { getItems } },
) => {
  return action$.pipe(
    ofType(MainActionTypes.LOAD_ITEMS),
    switchMap(({ payload }) => {
      return getItems(payload).pipe(
        map((items: ItemsList) => loadItemsSuccess(items)),
        catchError(() => of(loadItemsFailed())),
      );
    }),
  );
};

export const mainEpic = [executeGetItemsEpic];
