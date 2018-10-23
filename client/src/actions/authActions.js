import { GET_ERRORS, LOGIN_START, LOGIN_SUCCESS, LOGOUT } from "./actionTypes";

import axios from "axios";

// Login User

export const loginUser = (userData, history) => dispatch => {
  dispatch({ type: LOGIN_START });
  axios
    .post("/users/login", userData)
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
      history.push("/providers");
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const logoutUser = () => ({ type: LOGOUT });
