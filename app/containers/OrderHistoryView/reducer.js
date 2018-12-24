import { fromJS } from 'immutable';
import { GET_ORDER_SUCCESS, GET_ORDER_FAILURE } from './constants';

const initialState = fromJS({
  orders: {},
  // isAuthen: false,
});

function ListOrderReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ORDER_SUCCESS:
      return state
        .set('orders', fromJS(action.orders))
    // .set('isAuthen', true);

    case GET_ORDER_FAILURE:
      return state
        .set('orders', fromJS({}))
    // .set('isAuthen', false);

    default:
      return state;
  }
}

export default ListOrderReducer;
