import { of, from } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { ofType, Epic } from 'redux-observable';
import { RootStore, Dependencies } from '@core/store';
import { ItemsList } from '@core/pages/main/namespace';

import { MainActionTypes, loadItemsSuccess, loadItemsFailed } from '../actions';

const executeGetItemsEpic: Epic<any, any, RootStore, Dependencies> = (
  action$,
  _state$,
  { getItemsService },
) => {
  return action$.pipe(
    ofType(MainActionTypes.LOAD_ITEMS),
    switchMap(({ payload }) => {
      return from(getItemsService(payload)).pipe(
        map((items: ItemsList) => loadItemsSuccess(items)),
        catchError(() => of(loadItemsFailed())),
      );
    }),
  );
};

export const mainEpic = [executeGetItemsEpic];
