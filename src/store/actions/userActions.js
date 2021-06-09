import {push} from "connected-react-router";
import {
  REGISTER_USER_FAILURE,
  REGISTER_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  EDIT_PROFILE_FAILURE,
  EDIT_PROFILE_SUCCESS
} from "../actionTypes";
import axios from "../../axiosApi";

const registerUserSuccess = () => {
  return {type: REGISTER_USER_SUCCESS};
};
const registerUserFailure = error => {
  return {type: REGISTER_USER_FAILURE, error};
};

export const registerUser = userData => {
  return async dispatch => {
    try {
      await axios.post("/users", userData);
      dispatch(registerUserSuccess());
      dispatch(push("/user"));
    } catch (e) {
      if (e.response && e.response.data) {
        dispatch(registerUserFailure(e.response.data));
      } else {
        dispatch(registerUserFailure(e));
      }
    }
  }
};

const loginUserSuccess = user => {
  return {type: LOGIN_USER_SUCCESS, user};
};
const loginUserFailure = error => {
  return {type: LOGIN_USER_FAILURE, error};
};

export const loginUser = userData => {
  return async dispatch => {
    try {
      const response = await axios.post("/users/sessions", userData);
      dispatch(loginUserSuccess(response.data));
      dispatch(push("/"));
    } catch (e) {
      dispatch(loginUserFailure(e.response.data));
    }
  }
};

export const logoutUser = () => {
  return async (dispatch) => {
    await axios.delete("/users/sessions");
    dispatch({type: LOGOUT_USER});
    dispatch(push("/"));
  };
};

const editProfileSuccess = data => {
  return {type: EDIT_PROFILE_SUCCESS, data};
};

const editProfileFailure = error => {
  return {type: EDIT_PROFILE_FAILURE, error};
};

export const editProfile = data => {
  return async (dispatch) => {
    try {
      const response = await axios.put("/users/edit", data);
      dispatch(editProfileSuccess({user: response.data.user}));
      dispatch(push("/"));
    } catch (e) {
      console.log('asd')
      dispatch(editProfileFailure(e));
    }
  };
};