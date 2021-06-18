import {
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  EDIT_POST_SUCCESS,
  EDIT_POST_FAILURE,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE,
  COMMENT_POST_FAILURE,
  COMMENT_POST_SUCCESS,
  LIKE_POST_FAILURE,
  LIKE_POST_SUCCESS,
  ADD_REPLY_FAILURE,
  ADD_REPLY_SUCCESS,
} from "../actionTypes";
import axios from "../../axiosApi";
import { push } from "connected-react-router";
import axiosApi from "../../axiosApi";

const addPostSuccess = (data) => {
  return { type: ADD_POST_SUCCESS, data };
};
const addPostFailure = (error) => {
  return { type: ADD_POST_FAILURE, error };
};
export const addPost = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/posts", data);
      dispatch(addPostSuccess(response.data.user));
      if (data.repostFromUser) {
        dispatch(push("/user/" + response.data.user._id));
      }
    } catch (e) {
      dispatch(addPostFailure(e));
    }
  };
};

const deletePostSuccess = (data) => {
  return { type: DELETE_POST_SUCCESS, data };
};
const deletePostFailure = (error) => {
  return { type: DELETE_POST_FAILURE, error };
};
export const deletePost = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.patch("/posts/remove/" + id);
      dispatch(deletePostSuccess(response.data.user));
    } catch (e) {
      dispatch(deletePostFailure(e));
    }
  };
};

const editPostSuccess = (data) => {
  return { type: EDIT_POST_SUCCESS, data };
};
const editPostFailure = (error) => {
  return { type: EDIT_POST_FAILURE, error };
};
export const editPost = (id, data) => {
  return async (dispatch) => {
    try {
      const response = await axios.patch("/posts/edit/" + id, data);
      dispatch(editPostSuccess(response.data.user));
    } catch (e) {
      dispatch(editPostFailure(e));
    }
  };
};

const commentPostSuccess = (data) => {
  return { type: COMMENT_POST_SUCCESS, data };
};
const commentPostFailure = (error) => {
  return { type: COMMENT_POST_FAILURE, error };
};
export const commentPost = (id, data) => {
  return async (dispatch) => {
    try {
      const response = await axiosApi.patch("/posts/comment/" + id, data);
      dispatch(commentPostSuccess(response.data));
    } catch (e) {
      dispatch(commentPostFailure(e));
    }
  };
};

const likePostSuccess = (data) => {
  return { type: LIKE_POST_SUCCESS, data };
};
const likePostFailure = (error) => {
  return { type: LIKE_POST_FAILURE, error };
};
export const likePost = (id, postId) => {
  return async (dispatch) => {
    try {
      const response = await axiosApi.patch("/posts/like/" + id, postId);
      dispatch(likePostSuccess(response.data));
    } catch (e) {
      dispatch(likePostFailure(e));
    }
  };
};

const addReplySuccess = (data) => {
  return { type: ADD_REPLY_SUCCESS, data };
};
const addReplyFailure = (error) => {
  return { type: ADD_REPLY_FAILURE, error };
};
export const addReply = (id, data) => {
  return async (dispatch) => {
    try {
      const response = await axiosApi.patch("/posts/reply/" + id, data);
      dispatch(addReplySuccess(response.data));
    } catch (e) {
      dispatch(addReplyFailure(e));
    }
  };
};
