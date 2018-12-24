import { fromJS } from "immutable";
import {
  GET_BILL_DETAIL_SUCCESS,
  GET_BILL_DETAIL_FAILURE,
} from "./constants";

const initialState = fromJS({
  billDetails: {},
  // isAuthen: false,
});

function BillDetailReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BILL_DETAIL_SUCCESS:
      // console.log('GET_BILL_DETAIL_SUCCESS', action);
      return state.set("billDetails", fromJS(action.billDetails));
    // .set('isAuthen', true);

    case GET_BILL_DETAIL_FAILURE:
      return state.set("billDetails", fromJS({}));
    // .set('isAuthen', false);

    default:
      return state;
  }
}

export default BillDetailReducer;
