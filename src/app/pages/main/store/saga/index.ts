import { all, takeLatest, call, put } from 'redux-saga/effects';
import { MainActionTypes, loadItemsSuccess, loadItemsFailed } from './../actions';
import { getItemsService } from '@core/services/items';

function* executeGetItems(action: any) {
  try {
    // @ts-ignore
    const response = yield call(getItemsService, action.payload);
    yield put(loadItemsSuccess(response.data.items));
  } catch (error) {
    yield put(loadItemsFailed());
  }
}

export default function* mainSaga() {
  yield all([
    takeLatest(MainActionTypes.LOAD_ITEMS, executeGetItems),
  ]);
}
