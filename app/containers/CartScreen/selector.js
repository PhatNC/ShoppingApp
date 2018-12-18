import { createSelector } from 'reselect';


const cartReducer = (state) => {
  return state.get('CartReducer');
};

const selectCart = () => createSelector(
  cartReducer,
  (substate) => substate.get('cart').toJS()
);


export {
  cartReducer,
  selectCart,
};
