import {
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  EDIT_POST_SUCCESS,
  EDIT_POST_FAILURE,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE
} from "../actionTypes";
import axios from "../../axiosApi";

const addPostSuccess = data => {
  return {type: ADD_POST_SUCCESS, data};
};

const addPostFailure = error => {
  return {type: ADD_POST_FAILURE, error};
};

export const addPost = data => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/posts", data);
      dispatch(addPostSuccess({user: response.data.updatedUser}));
    } catch (e) {
      dispatch(addPostFailure(e));
    }
  };
};

const deletePostSuccess = data => {
  return {type: DELETE_POST_SUCCESS, data};
};

const deletePostFailure = error => {
  return {type: DELETE_POST_FAILURE, error};
};

export const deletePost = id => {
  return async (dispatch) => {
    try {
      const response = await axios.patch("/posts/remove/" + id);
      dispatch(deletePostSuccess({user: response.data.updatedUser}));
    } catch (e) {
      dispatch(deletePostFailure(e));
    }
  };
};

const editPostSuccess = data => {
  return {type: EDIT_POST_SUCCESS, data};
};

const editPostFailure = error => {
  return {type: EDIT_POST_FAILURE, error};
};

export const editPost = (id, data) => {
  return async (dispatch) => {
    try {
      const response = await axios.patch("/posts/edit/" + id, data);
      dispatch(editPostSuccess({user: response.data.updatedUser}));
    } catch (e) {
      dispatch(editPostFailure(e));
    }
  };
};
