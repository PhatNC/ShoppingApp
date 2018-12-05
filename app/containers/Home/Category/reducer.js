import { fromJS } from 'immutable';
import { GET_CATEGORY_SUCCESS, GET_CATEGORY_FAILURE } from './constants';

const initialState = fromJS({
  category: {},
  // isAuthen: false,
});

function TopProductReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORY_SUCCESS:
      // console.log('GET_PRODUCT_SUCCESS', action);
      return state
        .set('category', fromJS(action.category))
    // .set('isAuthen', true);

    case GET_CATEGORY_FAILURE:
      return state
        .set('category', fromJS({}))
    // .set('isAuthen', false);

    default:
      return state;
  }
}

export default TopProductReducer;
