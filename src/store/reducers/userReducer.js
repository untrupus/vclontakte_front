import {
  REGISTER_USER_FAILURE,
  REGISTER_USER_SUCCESS,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
  EDIT_PROFILE_FAILURE,
  EDIT_PROFILE_SUCCESS,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  EDIT_POST_SUCCESS,
  EDIT_POST_FAILURE,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE
} from "../actionTypes";

const initialState = {
  user: null,
  registerError: null,
  loginError: null,
  editProfileError: null,
  addPostError: null,
  deletePostError: null,
  editPostError: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_FAILURE:
      return {...state, registerError: action.error};
    case REGISTER_USER_SUCCESS:
      return {...state, registerError: null};
    case LOGIN_USER_FAILURE:
      return {...state, loginError: action.error};
    case LOGIN_USER_SUCCESS:
      return {...state, user: action.user, loginError: null};
    case LOGOUT_USER:
      return {...state, user: null};
    case EDIT_PROFILE_FAILURE:
      return {...state, editProfileError: action.error};
    case EDIT_PROFILE_SUCCESS:
      return {...state, user: action.data, editProfileError: null};
    case ADD_POST_FAILURE:
      return {...state, addPostError: action.error};
    case ADD_POST_SUCCESS:
      return {...state, user: action.data, addPostError: null};
    case DELETE_POST_FAILURE:
      return {...state, deletePostError: action.error};
    case DELETE_POST_SUCCESS:
      return {...state, user: action.data, deletePostError: null};
    case EDIT_POST_FAILURE:
      return {...state, editPostError: action.error};
    case EDIT_POST_SUCCESS:
      return {...state, user: action.data, editPostError: null};
    default:
      return state;
  }
};

export default userReducer;