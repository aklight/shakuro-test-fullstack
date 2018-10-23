import { FETCH_PROVIDERS_SUCCESS } from "../actions/actionTypes";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PROVIDERS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
