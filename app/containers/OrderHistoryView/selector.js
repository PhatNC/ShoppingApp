import { createSelector } from 'reselect';


const listOrderReducer = (state) => {
  // console.log(state)
  return state.get('ListOrderReducer');
};
// const appReducer = (state) => state.AppReducer;

const selectOrders = () => createSelector(
  listOrderReducer,
  (substate) => substate.get('orders').toJS()
);


export {
  listOrderReducer,
  selectOrders,
};
