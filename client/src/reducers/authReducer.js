import { LOGIN_SUCCESS, LOGOUT } from "../actions/actionTypes";

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      };

    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false
      };

    default:
      return state;
  }
}
