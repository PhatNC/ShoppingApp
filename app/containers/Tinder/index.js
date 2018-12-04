import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Tinder from '../../components/Main/Shop/Tinder';
import { getProductRequest } from './action';
import { selectProducts } from './selector';

const mapStateToProps = createStructuredSelector({
  newProducts: selectProducts(),
});

const mapDispatchToProps = (dispatch) => ({
  getNewProductRequest: (params) => dispatch(getProductRequest(params)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tinder);
