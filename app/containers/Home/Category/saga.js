import { call, put, takeLatest } from 'redux-saga/effects';

import { GET } from '../../../service';
import { GET_CATEGORY_PATH, GET_CATEGORY_REQUEST } from './constants';
import { getCategorySuccess, getCategoryFailure } from './action';

// =================================
// Call API getProduct
// =================================
export function* getCategoryRequest({ params }) {
  try {
    const { data } = yield call(GET,
      { path: GET_CATEGORY_PATH, body: params, opts: {} }
    );
    yield put(getCategorySuccess(data));
  } catch (error) {
    // console.log('Error', error)
    const errors = (error && error.response) ? error.response.data : [];
    yield put(getCategoryFailure(errors));
  }
}

// =================================
// Saga default for App
// =================================

export default [
  takeLatest(GET_CATEGORY_REQUEST, getCategoryRequest),
];
