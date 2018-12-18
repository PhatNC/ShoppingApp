import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ProductDetail from '../../components/Main/Shop/ProductDetail';
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
)(ProductDetail);
