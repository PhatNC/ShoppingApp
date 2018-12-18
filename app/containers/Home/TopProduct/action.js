import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
} from './constants';
// _____________________________________________________________________________
//                                                                         GET_PRODUCT
export const getProductRequest = (params) => {
  return ({ type: GET_PRODUCT_REQUEST, params })
};

export const getProductSuccess = (products) => {
  return ({ type: GET_PRODUCT_SUCCESS, products })
};

export const getProductFailure = (errors) => {
  return ({ type: GET_PRODUCT_FAILURE, errors })};