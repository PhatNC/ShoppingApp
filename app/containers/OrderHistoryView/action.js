import {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILURE,
} from './constants';
// _____________________________________________________________________________
//                                                                         GET_ORDER
export const getOrderRequest = (params) => {
  // console.log('getOrderRequest');
  return ({ type: GET_ORDER_REQUEST, params })
};

export const getOrderSuccess = (orders) => {
  // console.log('getOrderSuccess');
  return ({ type: GET_ORDER_SUCCESS, orders })
};

export const getOrderFailure = (errors) => {
  // console.log('getOrderFailure');
  return ({ type: GET_ORDER_FAILURE, errors })};