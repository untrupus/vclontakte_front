import { push } from "connected-react-router";
import {
  REGISTER_USER_FAILURE,
  REGISTER_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  EDIT_PROFILE_FAILURE,
  EDIT_PROFILE_SUCCESS,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAILURE,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAILURE,
} from "../actionTypes";
import axios from "../../axiosApi";
import axiosApi from "../../axiosApi";

const registerUserSuccess = () => {
  return { type: REGISTER_USER_SUCCESS };
};
const registerUserFailure = (error) => {
  return { type: REGISTER_USER_FAILURE, error };
};
export const registerUser = (userData) => {
  return async (dispatch) => {
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
  };
};

const loginUserSuccess = (user) => {
  return { type: LOGIN_USER_SUCCESS, user };
};
const loginUserFailure = (error) => {
  return { type: LOGIN_USER_FAILURE, error };
};
export const loginUser = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/users/sessions", userData);
      dispatch(loginUserSuccess(response.data));
      dispatch(push("/user/" + response.data.user._id));
    } catch (e) {
      dispatch(loginUserFailure(e));
    }
  };
};

export const logoutUser = () => {
  return async (dispatch) => {
    await axios.delete("/users/sessions");
    dispatch(push("/"));
    dispatch({ type: LOGOUT_USER });
  };
};

const editProfileSuccess = (data) => {
  return { type: EDIT_PROFILE_SUCCESS, data };
};
const editProfileFailure = (error) => {
  return { type: EDIT_PROFILE_FAILURE, error };
};
export const editProfile = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.put("/users/edit", data);
      dispatch(editProfileSuccess(response.data.user));
      dispatch(push("/user/" + response.data.user._id));
    } catch (e) {
      dispatch(editProfileFailure(e));
    }
  };
};

const getUserProfileSuccess = (data) => {
  return { type: GET_USER_PROFILE_SUCCESS, data };
};
const getUserProfileFailure = (error) => {
  return { type: GET_USER_PROFILE_FAILURE, error };
};
export const getUserProfile = (id) => {
  console.log(id);
  return async (dispatch) => {
    try {
      const response = await axiosApi.get("/users/" + id);
      dispatch(getUserProfileSuccess(response.data));
    } catch (e) {
      dispatch(getUserProfileFailure(e));
    }
  };
};

const getAllUsersSuccess = (data) => {
  return { type: GET_ALL_USERS_SUCCESS, data };
};
const getAllUsersFailure = (error) => {
  return { type: GET_ALL_USERS_FAILURE, error };
};
export const getAllUsers = () => {
  return async (dispatch) => {
    try {
      const response = await axiosApi.get("/users");
      dispatch(getAllUsersSuccess(response.data));
    } catch (e) {
      dispatch(getAllUsersFailure(e));
    }
  };
};
