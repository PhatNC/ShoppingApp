import {
  GET_BILL_DETAIL_REQUEST,
  GET_BILL_DETAIL_SUCCESS,
  GET_BILL_DETAIL_FAILURE
} from "./constants";
// _____________________________________________________________________________
//                                                                         GET_BILL_DETAIL
export const getBillDetailRequest = params => {
  return { type: GET_BILL_DETAIL_REQUEST, params };
};

export const getBillDetailSuccess = billDetails => {
  return { type: GET_BILL_DETAIL_SUCCESS, billDetails };
};

export const getBillDetailFailure = errors => {
  return { type: GET_BILL_DETAIL_FAILURE, errors };
};
