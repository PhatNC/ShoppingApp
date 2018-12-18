import { createSelector } from 'reselect';


const searchProductReducer = (state) => {
  // console.log(state)
  return state.get('SearchReducer');
};
// const appReducer = (state) => state.AppReducer;

const selectProducts = () => createSelector(
  searchProductReducer,
  (substate) => substate.get('products').toJS()
);


export {
  searchProductReducer,
  selectProducts,
};
