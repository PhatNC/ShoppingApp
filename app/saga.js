import { all } from 'redux-saga/effects'
import appSaga from './containers/App/saga';
import topProductSaga from './containers/Home/TopProduct/saga';
import cartSaga from './containers/CartScreen/saga';
import searchProductSaga from './containers/SeachView/saga';
import orderHistorySaga from './containers/OrderHistoryView/saga';
import tinderSaga from './containers/Tinder/saga';

export default function* sagas() {
  yield all([
    ...appSaga,
    ...topProductSaga,
    ...cartSaga,
    ...searchProductSaga,
    ...orderHistorySaga,
    ...tinderSaga,
  ]);
}
