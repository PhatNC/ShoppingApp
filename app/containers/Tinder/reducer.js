import { fromJS } from 'immutable';
import {
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
  GET_FAVORITE_SUCCESS,
  GET_FAVORITE_FAILURE,
  ADD_UPDATE_FAVORITE_SUCCESS,
  ADD_UPDATE_FAVORITE_FAILURE,
} from './constants';

const initialState = fromJS({
  products: {},
  favoriteProducts: {},
  // isAuthen: false,
});

function TinderReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT_SUCCESS:
      // console.log('GET_PRODUCT_SUCCESS', action);
      return state
        .set('products', fromJS(action.products))
    // .set('isAuthen', true);

    case GET_PRODUCT_FAILURE:
      return state
        .set('products', fromJS({}))
    // .set('isAuthen', false);

    case GET_FAVORITE_SUCCESS:
      return state
        .set('favoriteProducts', fromJS(action.favoriteProducts))

    case GET_FAVORITE_FAILURE:
      return state
        .set('favoriteProducts', fromJS({}))

    default:
      return state;
  }
}

export default TinderReducer;
