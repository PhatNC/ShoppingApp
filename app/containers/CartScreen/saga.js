import { call, put, takeLatest } from 'redux-saga/effects';

import { POST } from '../../service';
import { CHECKOUT_PATH, CHECKOUT_CART_REQUEST } from './constants';
import { checkoutSuccess, checkoutFailure } from './action';

// =================================
// Call API Checkout
// =================================
export function* checkoutRequest({ params }) {
  try {
    const { data } = yield call(POST,
      { path: CHECKOUT_PATH, body: params, opts: {} }
    );
    yield put(checkoutSuccess(data));
  } catch (error) {
    const errors = (error && error.response) ? error.response.data : [];
    yield put(checkoutFailure(errors));
  }
}

// =================================
// Saga default for App
// =================================

export default [
  takeLatest(CHECKOUT_CART_REQUEST, checkoutRequest),
];
