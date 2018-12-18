import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import AppContent from '../../components/AppContent';
import { selectAuthen, selectIsAuthen } from '../App/selector';

import { logout } from '../App/action';

const mapStateToProps = createStructuredSelector({
  isAuthen: selectIsAuthen(),
  authen :selectAuthen(),
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  logout: () => dispatch(logout()),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContent);
