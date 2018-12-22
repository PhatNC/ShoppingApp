import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
} from './constants';
// _____________________________________________________________________________
//                                                                         LOGIN
export const loginRequest = (params) => ({ type: LOGIN_REQUEST, params });

export const loginSuccess = (authen) => {
  return ({ type: LOGIN_SUCCESS, authen })
};

export const loginFailure = (errors) => ({ type: LOGIN_FAILURE, errors });

export const logout = () => ({ type: LOGOUT });

export const signUpRequest = (params) => ({ type: SIGN_UP_REQUEST, params });

export const signUpSuccess = (authen) => {
  return ({ type: SIGN_UP_SUCCESS, authen })
};

export const signUpFailure = (errors) => ({ type: SIGN_UP_FAILURE, errors });