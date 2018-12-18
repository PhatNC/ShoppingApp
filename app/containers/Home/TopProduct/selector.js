import { createSelector } from 'reselect';


const topProductReducer = (state) => {
  // console.log(state)
  return state.get('TopProductReducer');
};
// const appReducer = (state) => state.AppReducer;

const selectProducts = () => createSelector(
  topProductReducer,
  (substate) => substate.get('products').toJS()
);


export {
  topProductReducer,
  selectProducts,
};
