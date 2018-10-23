import { combineReducers } from "redux";

import authReducer from "./authReducer.js";
import providersReducer from "./providersReducer.js";
import errorReducer from "./errorReducer.js";
import refillReducer from "./refillReducer.js";

export default combineReducers({
  auth: authReducer,
  providers: providersReducer,
  refilling: refillReducer,
  errors: errorReducer
});
