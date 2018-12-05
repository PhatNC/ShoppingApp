import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './constants';
// _____________________________________________________________________________
//                                                                         LOGIN
export const loginRequest = (params) => ({ type: LOGIN_REQUEST, params });

export const loginSuccess = (authen) => {
  // console.log('loginSuccess');
  return ({ type: LOGIN_SUCCESS, authen })};

export const loginFailure = (errors) => ({ type: LOGIN_FAILURE, errors });