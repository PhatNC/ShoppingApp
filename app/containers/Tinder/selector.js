import { createSelector } from "reselect";

const tinderReducer = state => {
  // console.log(state)
  return state.get("TinderReducer");
};
// const appReducer = (state) => state.AppReducer;

const selectProducts = () =>
  createSelector(
    tinderReducer,
    substate => substate.get("products").toJS()
  );

const selectFavoriteProducts = () =>
  createSelector(
    tinderReducer,
    substate => {
      // console.log("Sub", substate, "==================================");
      return substate.get("favoriteProducts").toJS();
    }
  );

export { tinderReducer, selectProducts, selectFavoriteProducts };
