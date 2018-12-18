// import { call, put, takeLatest } from 'redux-saga/effects';

// import { GET } from '../../service';
// import { GET_PRODUCT_PATH, GET_PRODUCT_REQUEST } from './constants';
// import { getProductSuccess, getProductFailure } from './action';

// // =================================
// // Call API getProduct
// // =================================
// export function* getProductRequest({ params }) {
//   try {
//     const { data } = yield call(GET,
//       { path: GET_PRODUCT_PATH, body: params, opts: {} }
//     );
//     yield put(getProductSuccess(data));
//   } catch (error) {
//     // console.log('Error', error)
//     const errors = (error && error.response) ? error.response.data : [];
//     yield put(getProductFailure(errors));
//   }
// }

// // =================================
// // Saga default for App
// // =================================

// export default [
//   takeLatest(GET_PRODUCT_REQUEST, getProductRequest),
// ];
