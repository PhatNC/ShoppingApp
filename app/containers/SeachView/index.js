import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import SearchView from '../../components/Shop/Search/SearchView';
import { getProductRequest } from './action';
import { selectProducts } from './selector';

const mapStateToProps = createStructuredSelector({
  products: selectProducts(),
});

const mapDispatchToProps = (dispatch) => ({
  getProductRequest: (params) => dispatch(getProductRequest(params)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchView);
