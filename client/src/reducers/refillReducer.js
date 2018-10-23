import { REFILL_BALANCE_SUCCESS } from "../actions/actionTypes";

const initialState = {
  isRefilled: false,
  provider: "",
  amount: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REFILL_BALANCE_SUCCESS:
      return {
        ...state,
        isRefilled: true,
        provider: action.payload.provider,
        amount: action.payload.amount
      };
    default:
      return state;
  }
}
