import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Tinder from '../../components/Shop/Tinder';
import { getProductRequest, getFavoriteRequest, addUpdateFavoriteRequest } from './action';
import { selectProducts, selectFavoriteProducts } from './selector';

const mapStateToProps = createStructuredSelector({
  newProducts: selectProducts(),
  favoriteProducts: selectFavoriteProducts(),
});

const mapDispatchToProps = (dispatch) => ({
  getNewProductRequest: (params) => dispatch(getProductRequest(params)),
  getFavoriteRequest: (params) => dispatch(getFavoriteRequest(params)),
  addUpdateFavoriteRequest: (params) => dispatch(addUpdateFavoriteRequest(params)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tinder);
