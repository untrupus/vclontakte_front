import {
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_FAILURE,
  DELETE_FRIEND_FAILURE,
  DELETE_FRIEND_SUCCESS,
} from "../actionTypes";
import axiosApi from "../../axiosApi";

const addFriendSuccess = (data) => {
  return { type: ADD_FRIEND_SUCCESS, data };
};

const addFriendFailure = (error) => {
  return { type: ADD_FRIEND_FAILURE, error };
};

export const addFriend = (id) => {
  return async (dispatch) => {
    try {
      const response = await axiosApi.patch("/friends/subscribe/" + id);
      dispatch(addFriendSuccess(response.data.user));
    } catch (e) {
      dispatch(addFriendFailure(e));
    }
  };
};

const deleteFriendSuccess = (data) => {
  return { type: DELETE_FRIEND_SUCCESS, data };
};

const deleteFriendFailure = (error) => {
  return { type: DELETE_FRIEND_FAILURE, error };
};

export const deleteFriend = (id) => {
  return async (dispatch) => {
    try {
      const response = await axiosApi.patch("/friends/unsubscribe/" + id);
      dispatch(deleteFriendSuccess(response.data.user));
    } catch (e) {
      dispatch(deleteFriendFailure(e));
    }
  };
};
