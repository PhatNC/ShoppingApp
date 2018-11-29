import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Login from '../../components/Authentication';
import { loginRequest } from '../App/action';
import { selectIsAuthen, selectAuthen } from '../App/selector';

const mapStateToProps = createStructuredSelector({
  isAuthen: selectIsAuthen(),
  authen: selectAuthen(),
});

const mapDispatchToProps = (dispatch) => ({
  loginRequest: (params) => dispatch(loginRequest(params)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
