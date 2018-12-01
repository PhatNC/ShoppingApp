import { call, put, takeLatest } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';

import { POST } from '../../service';
import { LOGIN_PATH, LOGIN_REQUEST } from './constants';
import { loginSuccess, loginFailure } from './action';

const navigateAction = () => {
  NavigationActions.navigate({ routeName: 'SHOP' });
} 


// =================================
// Call API login
// =================================
export function* loginRequest({ params }) {
  try {
    const { data } = yield call(POST,
      { path: LOGIN_PATH, body: params, opts: {} }
    );
    // console.log('loginRequest', loginSuccess);
    yield put(loginSuccess(data));
    // yield put(navigateAction());
    navigateAction();
  } catch (error) {
    const errors = (error && error.response) ? error.response.data : [];
    yield put(loginFailure(errors));
  }
}

// =================================
// Saga default for App
// =================================

export default [
  takeLatest(LOGIN_REQUEST, loginRequest),
];
