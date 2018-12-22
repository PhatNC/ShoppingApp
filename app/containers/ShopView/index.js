import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Shop from '../../components/Shop';
import { selectAuthen, selectIsAuthen } from '../App/selector';

const mapStateToProps = createStructuredSelector({
  isAuthen: selectIsAuthen(),
  authen: selectAuthen(),
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop);
