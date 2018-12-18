import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from './constants';
// _____________________________________________________________________________
//                                                                         LOGIN
export const loginRequest = (params) => ({ type: LOGIN_REQUEST, params });

export const loginSuccess = (authen) => {
  return ({ type: LOGIN_SUCCESS, authen })
};

export const loginFailure = (errors) => ({ type: LOGIN_FAILURE, errors });

export const logout = () => ({ type: LOGOUT });