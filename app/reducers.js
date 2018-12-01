import { combineReducers } from 'redux-immutable';

import AppReducer from './containers/App/reducer';
import TopProductReducer from './containers/Home/TopProduct/reducer';


export default combineReducers({
  AppReducer: AppReducer,
  TopProductReducer: TopProductReducer,
});
