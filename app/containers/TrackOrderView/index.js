import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import TrackOrder from '../../components/TrackOrder';
import { getBillDetailRequest, } from './action';
import { selectBillDetail,  } from './selector';

const mapStateToProps = createStructuredSelector({
  billDetail: selectBillDetail(),
});

const mapDispatchToProps = (dispatch) => ({
  getBillDetailRequest: (params) => dispatch(getBillDetailRequest(params)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackOrder);
