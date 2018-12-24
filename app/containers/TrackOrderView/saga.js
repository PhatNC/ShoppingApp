import { call, put, takeLatest } from "redux-saga/effects";

import { GET, POST } from "../../service";
import {
  GET_BILL_DETAIL_PATH,
  GET_BILL_DETAIL_REQUEST,
} from "./constants";
import {
  getBillDetailSuccess,
  getBillDetailFailure,
} from "./action";

// =================================
// Call API getBillDetail
// =================================
export function* getBillDetailRequest({ params }) {
  try {
    const { data } = yield call(GET, {
      path: GET_BILL_DETAIL_PATH,
      body: params,
      opts: {}
    });
    yield put(getBillDetailSuccess(data));
  } catch (error) {
    const errors = error && error.response ? error.response.data : [];
    yield put(getBillDetailFailure(errors));
  }
}

// =================================
// Saga default for App
// =================================

export default [
  takeLatest(GET_BILL_DETAIL_REQUEST, getBillDetailRequest),
];
