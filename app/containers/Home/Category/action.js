import {
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILURE,
} from './constants';
// _____________________________________________________________________________
//                                                                         GET_PRODUCT
export const getCategoryRequest = (params) => {
  // console.log('getProductRequest');
  return ({ type: GET_CATEGORY_REQUEST, params })
};

export const getCategorySuccess = (products) => {
  // console.log('getProductSuccess');
  return ({ type: GET_CATEGORY_SUCCESS, products })
};

export const getCategoryFailure = (errors) => {
  // console.log('getProductFailure');
  return ({ type: GET_CATEGORY_FAILURE, errors })};