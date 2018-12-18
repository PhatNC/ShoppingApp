import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ListProduct from '../../components/Main/Shop/ListProduct';
import { getProductRequest } from '../Home/TopProduct/action';
import { selectProducts } from '../Home/TopProduct/selector';

const mapStateToProps = createStructuredSelector({
  products: selectProducts(),
});

const mapDispatchToProps = (dispatch) => ({
  getProductRequest: (params) => dispatch(getProductRequest(params)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListProduct);
