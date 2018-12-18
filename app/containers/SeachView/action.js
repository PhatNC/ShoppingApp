import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
} from './constants';
// _____________________________________________________________________________
//                                                                         GET_PRODUCT
export const getProductRequest = (params) => {
  // console.log('getProductRequest');
  return ({ type: GET_PRODUCT_REQUEST, params })
};

export const getProductSuccess = (products) => {
  // console.log('getProductSuccess');
  return ({ type: GET_PRODUCT_SUCCESS, products })
};

export const getProductFailure = (errors) => {
  // console.log('getProductFailure');
  return ({ type: GET_PRODUCT_FAILURE, errors })};