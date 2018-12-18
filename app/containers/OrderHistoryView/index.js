import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import OrderHistory from '../../components/OrderHistory'
import { selectOrders } from './selector';
import { getOrderRequest } from './action';


const mapStateToProps = createStructuredSelector({
  orders: selectOrders(),
});

const mapDispatchToProps = (dispatch) => ({
  getOrderRequest: (params) => dispatch(getOrderRequest(params)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderHistory);
