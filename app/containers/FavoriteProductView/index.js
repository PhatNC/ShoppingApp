import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import List from "../../components/FavoriteProduct/List";
import { getFavoriteRequest, addUpdateFavoriteRequest } from "../Tinder/action";
import { selectFavoriteProducts } from "../Tinder/selector";

const mapStateToProps = createStructuredSelector({
  favoriteProducts: selectFavoriteProducts()
});

const mapDispatchToProps = dispatch => ({
  getFavoriteRequest: params => dispatch(getFavoriteRequest(params)),
  addUpdateFavoriteRequest: params => dispatch(addUpdateFavoriteRequest(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
