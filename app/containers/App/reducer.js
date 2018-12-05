import { fromJS } from 'immutable';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from './constants';

const initialState = fromJS({
  authen: {},
  isAuthen: false,
});

function AppReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      // console.log('LOGIN_SUCCESS', action);
      return state
        .set('authen', fromJS(action.authen))
        .set('isAuthen', true);

    case LOGIN_FAILURE:
      return state
        .set('authen', fromJS({}))
        .set('isAuthen', false);

    default:
      return state;
  }
}

export default AppReducer;
