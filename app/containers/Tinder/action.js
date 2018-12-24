import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
  GET_FAVORITE_REQUEST,
  GET_FAVORITE_SUCCESS,
  GET_FAVORITE_FAILURE,
  ADD_UPDATE_FAVORITE_REQUEST,
  ADD_UPDATE_FAVORITE_SUCCESS,
  ADD_UPDATE_FAVORITE_FAILURE,

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
  return ({ type: GET_PRODUCT_FAILURE, errors })
};

export const getFavoriteRequest = (params) => {
  // console.log('getFavoriteRequest');
  return ({ type: GET_FAVORITE_REQUEST, params })
};

export const getFavoriteSuccess = (favoriteProducts) => {
  // console.log('getFavoriteSuccess');
  return ({ type: GET_FAVORITE_SUCCESS, favoriteProducts })
};

export const getFavoriteFailure = (errors) => {
  // console.log('getFavoriteFailure');
  return ({ type: GET_FAVORITE_FAILURE, errors })
};

export const addUpdateFavoriteRequest = (params) => {
  // console.log('addUpdateFavoriteRequest');
  return ({ type: ADD_UPDATE_FAVORITE_REQUEST, params })
};

export const addUpdateFavoriteSuccess = (products) => {
  // console.log('addUpdateFavoriteSuccess');
  return ({ type: ADD_UPDATE_FAVORITE_SUCCESS, products })
};

export const addUpdateFavoriteFailure = (errors) => {
  // console.log('addUpdateFavoriteFailure');
  return ({ type: ADD_UPDATE_FAVORITE_FAILURE, errors })
};