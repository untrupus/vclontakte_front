import {
  GET_MESSAGES_SUCCESS,
  POST_MESSAGES_SUCCESS,
  GET_INTERLOCUTOR_SUCCESS,
} from "../actionTypes";

const initialState = {
  messages: [],
  interlocutor: {},
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGES_SUCCESS:
      return { ...state, messages: action.value };
    case GET_INTERLOCUTOR_SUCCESS:
      return { ...state, interlocutor: action.data };
    case POST_MESSAGES_SUCCESS:
      return { ...state, messages: [...state.messages, action.value] };
    default:
      return state;
  }
};

export default chatReducer;
