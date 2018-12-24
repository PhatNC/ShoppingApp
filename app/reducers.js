import { combineReducers } from "redux-immutable";

import AppReducer from "./containers/App/reducer";
import TopProductReducer from "./containers/Home/TopProduct/reducer";
import CartReducer from "./containers/CartScreen/reducer";
import SearchReducer from "./containers/SeachView/reducer";
import ListOrderReducer from "./containers/OrderHistoryView/reducer";
import TinderReducer from "./containers/Tinder/reducer";
import BillDetailReducer from "./containers/TrackOrderView/reducer";

export default combineReducers({
  AppReducer: AppReducer,
  TopProductReducer: TopProductReducer,
  CartReducer: CartReducer,
  SearchReducer: SearchReducer,
  ListOrderReducer: ListOrderReducer,
  TinderReducer: TinderReducer,
  BillDetailReducer: BillDetailReducer
});
