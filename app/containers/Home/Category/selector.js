import { createSelector } from 'reselect';


const topCategoryReducer = (state) => {
  // console.log(state)
  return state.get('CategoryReducer');
};
// const appReducer = (state) => state.AppReducer;

const selectCategory = () => createSelector(
  topCategoryReducer,
  (substate) => substate.get('category').toJS()
);


export {
  topCategoryReducer,
  selectCategory,
};
