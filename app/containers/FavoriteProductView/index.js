import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import FavorProduct from "../../components/FavoriteProduct/FavorProduct";
import { getFavoriteRequest } from "../Tinder/action";
import { selectFavoriteProducts } from "../Tinder/selector";

const mapStateToProps = createStructuredSelector({
  favoriteProducts: selectFavoriteProducts()
});

const mapDispatchToProps = dispatch => ({
  getFavoriteRequest: params => dispatch(getFavoriteRequest(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavorProduct);
