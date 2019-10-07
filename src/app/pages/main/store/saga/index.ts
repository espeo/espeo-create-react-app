import { all, takeLatest, call, put } from 'redux-saga/effects';
import { getItemsService } from '@core/services/items';
import { MainActionTypes, loadItemsSuccess, loadItemsFailed } from '../actions';

function* executeGetItems(action: any) {
  try {
    const response = yield call(getItemsService, action.payload);
    yield put(loadItemsSuccess(response.data.items));
  } catch (error) {
    yield put(loadItemsFailed());
  }
}

export default function* mainSaga() {
  yield all([takeLatest(MainActionTypes.LOAD_ITEMS, executeGetItems)]);
}
