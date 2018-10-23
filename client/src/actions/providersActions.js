import {
  FETCH_PROVIDERS_FAILURE,
  FETCH_PROVIDERS_START,
  FETCH_PROVIDERS_SUCCESS
} from "./actionTypes";

import axios from "axios";

// Fetch list of providers from the server

export const fetchProviders = history => dispatch => {
  dispatch({ type: FETCH_PROVIDERS_START });

  axios
    .get("/providers")
    .then(providers => {
      dispatch({ type: FETCH_PROVIDERS_SUCCESS, payload: providers.data });
      history.push("/providers");
    })
    .catch(err => {
      dispatch({
        type: FETCH_PROVIDERS_FAILURE,
        payload: err
      });
    });
};
