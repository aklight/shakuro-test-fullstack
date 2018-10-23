import {
  GET_ERRORS,
  REFILL_BALANCE_START,
  REFILL_BALANCE_SUCCESS
} from "./actionTypes";

import axios from "axios";

// Update balace of certain provider for current user

export const updateBalance = (dataToUpdate, history) => dispatch => {
  dispatch({ type: REFILL_BALANCE_START });

  axios
    .post("/refill", dataToUpdate)
    .then(res => {
      dispatch({ type: REFILL_BALANCE_SUCCESS, payload: res.data });
      console.log(res.data);
      history.push("/");
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
