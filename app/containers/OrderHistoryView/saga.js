import { call, put, takeLatest } from 'redux-saga/effects';

import { GET } from '../../service';
import { GET_ORDER_PATH, GET_ORDER_REQUEST } from './constants';
import { getOrderSuccess, getOrderFailure } from './action';

// =================================
// Call API getOrder
// =================================
export function* getOrderRequest({ params }) {
  try {
    const { data } = yield call(GET,
      { path: `${GET_ORDER_PATH}/${params}`, body: params, opts: {} }
    );
    // console.log('AAAAAAAAAAADDDDDDDDDDDDDDDDDDD',data)
    yield put(getOrderSuccess(data));
  } catch (error) {
    // console.log('Error', error)
    const errors = (error && error.response) ? error.response.data : [];
    yield put(getOrderFailure(errors));
  }
}

// =================================
// Saga default for App
// =================================

export default [
  takeLatest(GET_ORDER_REQUEST, getOrderRequest),
];
