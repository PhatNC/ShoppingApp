import { call, put, takeLatest } from 'redux-saga/effects';

import { GET, POST } from '../../service';
import {
  GET_PRODUCT_PATH,
  GET_PRODUCT_REQUEST,
  GET_FAVORITE_PATH,
  GET_FAVORITE_REQUEST,
  ADD_UPDATE_FAVORITE_REQUEST,
} from './constants';
import {
  getProductSuccess,
  getProductFailure,
  getFavoriteSuccess,
  getFavoriteFailure,
  addUpdateFavoriteSuccess,
  addUpdateFavoriteFailure,
} from './action';

// =================================
// Call API getProduct
// =================================
export function* getProductRequest({ params }) {
  try {
    const { data } = yield call(GET,
      { path: GET_PRODUCT_PATH, body: params, opts: {} }
    );
    yield put(getProductSuccess(data));
  } catch (error) {
    // console.log('Error', error)
    const errors = (error && error.response) ? error.response.data : [];
    yield put(getProductFailure(errors));
  }
}

export function* getFavoriteRequest({ params }) {
  try {
    const { data } = yield call(GET,
      { path: GET_FAVORITE_PATH, body: params, opts: {} }
    );
    yield put(getFavoriteSuccess(data));
  } catch (error) {
    // console.log('Error', error)
    const errors = (error && error.response) ? error.response.data : [];
    yield put(getFavoriteFailure(errors));
  }
}

export function* addUpdateFavoriteRequest({ params }) {
  try {
    const { data } = yield call(POST,
      { path: GET_FAVORITE_PATH, body: params, opts: {} }
    );
    yield put(addUpdateFavoriteSuccess(data));
  } catch (error) {
    // console.log('Error', error)
    const errors = (error && error.response) ? error.response.data : [];
    yield put(addUpdateFavoriteFailure(errors));
  }
}

// =================================
// Saga default for App
// =================================

export default [
  takeLatest(GET_PRODUCT_REQUEST, getProductRequest),
  takeLatest(GET_FAVORITE_REQUEST, getFavoriteRequest),
  takeLatest(ADD_UPDATE_FAVORITE_REQUEST, addUpdateFavoriteRequest),
];
