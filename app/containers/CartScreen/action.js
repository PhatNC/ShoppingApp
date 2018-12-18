import {
  CHECKOUT_CART_REQUEST,
  CHECKOUT_CART_SUCCESS,
  CHECKOUT_CART_FAILURE,
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  REMOVE_ALL_PRODUCT_FROM_CART,
  UPDATE_COUNT_NUMBER_PRODUCT,
} from './constants';
// _____________________________________________________________________________
//                                                                         GET_PRODUCT
export const checkoutRequest = (params) => {
  return ({ type: CHECKOUT_CART_REQUEST, params });
};

export const checkoutSuccess = (order) => {
  return ({ type: CHECKOUT_CART_SUCCESS, order });
};

export const checkoutFailure = (errors) => {
  return ({ type: CHECKOUT_CART_FAILURE, errors });
};

export const addProductToCart = (product) => ({
  type: ADD_PRODUCT_TO_CART, product,
});

export const removeProductFromCart = (id) => ({
  type: REMOVE_PRODUCT_FROM_CART, id,
})

export const removeAllProductFromCart = () => ({
  type: REMOVE_ALL_PRODUCT_FROM_CART,
})

export const updateCountNumberProduct = (params) => ({
  type: UPDATE_COUNT_NUMBER_PRODUCT, params,
})