import { fromJS } from 'immutable';
import { findIndex } from '../../config';
import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  UPDATE_COUNT_NUMBER_PRODUCT,
  REMOVE_ALL_PRODUCT_FROM_CART,
} from './constants';

const initialState = fromJS({
  cart: [],
  checkoutData: []
});

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return state
        .update('cart', (arr) => {
          const cart = arr.toJS();
          const idx = findIndex(cart, action.product._id);

          if (idx > -1) { return fromJS(cart); }

          return fromJS([...cart, { ...action.product, count: 1 }])
        });

    case REMOVE_PRODUCT_FROM_CART:
      return state
        .update('cart', (arr) => {
          const cart = arr.toJS();
          const idx = findIndex(cart, action.id);

          if (idx > -1) { cart.splice(idx, 1); }

          return fromJS(cart);
        });

    case REMOVE_ALL_PRODUCT_FROM_CART:
      return state
        .set('cart', fromJS([]));

    case UPDATE_COUNT_NUMBER_PRODUCT:
      return state
        .update('cart', (arr) => {
          const cart = arr.toJS();
          const idx = findIndex(cart, action.params.product._id);

          cart[idx].count = action.params.count;
          return fromJS(cart);
        });

    default:
      return state;
  }
}

export default cartReducer;
