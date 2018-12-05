import { combineReducers } from 'redux-immutable';

import AppReducer from './containers/App/reducer';
import TopProductReducer from './containers/Home/TopProduct/reducer';
import CategoryReducer from './containers/Home/Category/reducer';


export default combineReducers({
  AppReducer: AppReducer,
  TopProductReducer: TopProductReducer,
  CategoryReducer: CategoryReducer,
});
