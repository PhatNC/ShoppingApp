import { createSelector } from 'reselect';


const appReducer = (state) => state.get('AppReducer');
// const appReducer = (state) => state.AppReducer;

console.log('appReducer', appReducer);

const selectAuthen = () => createSelector(
  appReducer,
  (substate) => substate.get('authen').toJS()
);

const selectIsAuthen = () => createSelector(
  appReducer,
  (substate) => substate.get('isAuthen')
);


export {
  appReducer,
  selectAuthen,
  selectIsAuthen,
};
