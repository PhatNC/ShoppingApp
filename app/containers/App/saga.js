import { call, put, takeLatest } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';

import { GET, POST } from '../../service';
import { LOGIN_PATH, LOGIN_REQUEST, SIGN_UP_PATH, SIGN_UP_REQUEST } from './constants';
import { loginSuccess, loginFailure, signUpSuccess, signUpFailure } from './action';
import { Alert } from 'react-native'

const navigateAction = () => {
  NavigationActions.navigate('SHOP');
}

const nofifyFail = () => {
  Alert.alert(
    'Notification!',
    'Wrong email or password. Please check and login again!',
    [
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ],
    { cancelable: false }
  )
}

// =================================
// Call API login
// =================================
export function* loginRequest({ params }) {
  try {
    const { data } = yield call(GET,
      { path: LOGIN_PATH, body: params, opts: {} }
    );
    yield put(loginSuccess(data));
    yield call(navigateAction);
  } catch (error) {
    const errors = (error && error.response) ? error.response.data : [];
    yield put(loginFailure(errors));
    yield call(nofifyFail);
  }
}

export function* signUpRequest({ params }) {
  try {
    const { data } = yield call(POST,
      { path: SIGN_UP_PATH, body: params, opts: {} }
    );
    yield put(signUpSuccess(data));
    yield call(navigateAction);
  } catch (error) {
    const errors = (error && error.response) ? error.response.data : [];
    yield put(signUpFailure(errors));
    yield call(nofifyFail);
  }
}
// =================================
// Saga default for App
// =================================

export default [
  takeLatest(LOGIN_REQUEST, loginRequest),
  takeLatest(SIGN_UP_REQUEST, signUpRequest),
];
