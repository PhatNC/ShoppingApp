import { all } from 'redux-saga/effects'
import appSaga from './containers/App/saga';
import topProductSaga from './containers/Home/TopProduct/saga';
import categorySaga from './containers/Home/Category/saga';

export default function* sagas() {
  yield all([
    ...appSaga,
	...topProductSaga,
	...categorySaga,
  ]);
}
