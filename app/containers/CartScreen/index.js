import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartView from '../../components/Shop/Cart/CartView';
import { selectCart } from './selector';
import { selectAuthen } from '../App/selector';
import { removeProductFromCart, updateCountNumberProduct, checkoutRequest, removeAllProductFromCart } from './action';


const mapStateToProps = createStructuredSelector({
  cart: selectCart(),
  authen: selectAuthen(),
});

const mapDispatchToProps = (dispatch) => ({
  removeProductFromCart: (product) => dispatch(removeProductFromCart(product)),
  updateCountNumberProduct: (params) => dispatch(updateCountNumberProduct(params)),
  checkoutRequest: (params) => dispatch(checkoutRequest(params)),
  removeAllProductFromCart: () => dispatch(removeAllProductFromCart()),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartView);
