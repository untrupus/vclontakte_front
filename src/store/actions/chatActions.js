import {
  CREATE_CHAT_WITH,
  REMOVE_CHAT_WITH,
  GET_INTERLOCUTOR_SUCCESS,
  GET_MESSAGES_SUCCESS,
  POST_MESSAGES_SUCCESS,
} from "../actionTypes";
import axiosApi from "../../axiosApi";
import { push } from "connected-react-router";

const createChatWith = (data) => {
  return { type: CREATE_CHAT_WITH, data };
};

export const createChat = (data) => {
  return async (dispatch) => {
    try {
      const response = await axiosApi.patch("users/chats", data);
      await dispatch(createChatWith(response.data));
      dispatch(push("/messenger/" + data.with));
    } catch (e) {
      console.log(e);
    }
  };
};

const removeChatWith = (data) => {
  return { type: REMOVE_CHAT_WITH, data };
};

export const removeChat = (id) => {
  return async (dispatch) => {
    try {
      const response = await axiosApi.patch("users/chats/remove/" + id);
      dispatch(removeChatWith(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};

const getInterlocutorSuccess = (data) => {
  return { type: GET_INTERLOCUTOR_SUCCESS, data };
};

export const getInterlocutor = (id) => {
  return async (dispatch) => {
    try {
      const response = await axiosApi.get("/users/" + id);
      await dispatch(getInterlocutorSuccess(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const getMessages = (value) => {
  return { type: GET_MESSAGES_SUCCESS, value };
};
export const postMessage = (value) => {
  return { type: POST_MESSAGES_SUCCESS, value };
};
