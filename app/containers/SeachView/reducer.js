import { fromJS } from 'immutable';
import { GET_PRODUCT_SUCCESS, GET_PRODUCT_FAILURE } from './constants';

const initialState = fromJS({
  products: {},
  // isAuthen: false,
});

function SearchProductReducer(state = initialState, action) {
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

    default:
      return state;
  }
}

export default SearchProductReducer;
