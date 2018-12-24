import { createSelector } from "reselect";

const billDetailReducer = state => {
  return state.get("BillDetailReducer");
};
// const appReducer = (state) => state.AppReducer;

const selectBillDetail = () =>
  createSelector(
    billDetailReducer,
    substate => {
      // console.log("Sub", billDetailReducer, "==================================");
      return substate.get("billDetails").toJS();
    }
  );


export { billDetailReducer, selectBillDetail };
