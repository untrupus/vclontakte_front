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
  DELETE_POST_FAILURE,
  JOIN_GROUP_SUCCESS,
  LEAVE_GROUP_SUCCESS,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAILURE,
  GET_ALL_USERS_FAILURE,
  GET_ALL_USERS_SUCCESS,
  ADD_FRIEND_FAILURE,
  ADD_FRIEND_SUCCESS,
  DELETE_FRIEND_FAILURE,
  DELETE_FRIEND_SUCCESS,
  COMMENT_POST_FAILURE,
  COMMENT_POST_SUCCESS,
  LIKE_POST_FAILURE,
  LIKE_POST_SUCCESS,
  ADD_REPLY_SUCCESS,
  CREATE_CHAT_WITH,
  REMOVE_CHAT_WITH,
} from "../actionTypes";

const initialState = {
  user: null,
  userProfile: {},
  allUsers: [],
  getUserProfileError: null,
  getAllUsersError: null,
  registerError: null,
  loginError: null,
  editProfileError: null,
  addPostError: null,
  deletePostError: null,
  editPostError: null,
  addFriendError: null,
  deleteFriendError: null,
  commentPostError: null,
  likePostError: null,
};

const userReducer = (state = initialState, action) => {
  let newUserProfile;
  let index;
  switch (action.type) {
    case REGISTER_USER_FAILURE:
      return { ...state, registerError: action.error };
    case REGISTER_USER_SUCCESS:
      return { ...state, registerError: null };
    case LOGIN_USER_FAILURE:
      return { ...state, loginError: action.error };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.user, loginError: null };
    case LOGOUT_USER:
      return { ...state, user: null };
    case EDIT_PROFILE_FAILURE:
      return { ...state, editProfileError: action.error };
    case EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        userProfile: action.data.user,
        editProfileError: null,
      };
    case ADD_POST_FAILURE:
      return { ...state, addPostError: action.error };
    case ADD_POST_SUCCESS:
      return { ...state, userProfile: action.data, addPostError: null };
    case DELETE_POST_FAILURE:
      return { ...state, deletePostError: action.error };
    case DELETE_POST_SUCCESS:
      return { ...state, userProfile: action.data, deletePostError: null };
    case EDIT_POST_FAILURE:
      return { ...state, editPostError: action.error };
    case EDIT_POST_SUCCESS:
      return { ...state, userProfile: action.data, editPostError: null };
    case JOIN_GROUP_SUCCESS:
      return { ...state, user: { user: action.data.user } };
    case LEAVE_GROUP_SUCCESS:
      return { ...state, user: { user: action.data.user } };
    case GET_USER_PROFILE_SUCCESS:
      return { ...state, userProfile: action.data, getUserProfileError: null };
    case GET_USER_PROFILE_FAILURE:
      return { ...state, getUserProfileError: action.error };
    case GET_ALL_USERS_FAILURE:
      return { ...state, getAllUsersError: action.error };
    case GET_ALL_USERS_SUCCESS:
      return { ...state, allUsers: action.data, getAllUsersError: null };
    case ADD_FRIEND_SUCCESS:
      return { ...state, userProfile: action.data, addFriendError: null };
    case ADD_FRIEND_FAILURE:
      return { ...state, addFriendError: action.error };
    case DELETE_FRIEND_SUCCESS:
      return { ...state, userProfile: action.data, deleteFriendError: null };
    case DELETE_FRIEND_FAILURE:
      return { ...state, deleteFriendError: action.error };
    case COMMENT_POST_SUCCESS:
      newUserProfile = Object.assign({}, state.userProfile);
      index = newUserProfile.posts.findIndex(
        (post) => post._id === action.data._id
      );
      newUserProfile.posts = [
        ...newUserProfile.posts.slice(0, index),
        action.data,
        ...newUserProfile.posts.slice(index + 1),
      ];
      return {
        ...state,
        userProfile: newUserProfile,
        commentPostError: null,
      };
    case COMMENT_POST_FAILURE:
      return { ...state, commentPostError: action.error };
    case LIKE_POST_FAILURE:
      return { ...state, likePostError: action.error };
    case LIKE_POST_SUCCESS:
      newUserProfile = Object.assign({}, state.userProfile);
      index = newUserProfile.posts.findIndex(
        (post) => post._id === action.data._id
      );
      newUserProfile.posts = [
        ...newUserProfile.posts.slice(0, index),
        action.data,
        ...newUserProfile.posts.slice(index + 1),
      ];
      return {
        ...state,
        userProfile: newUserProfile,
        commentPostError: null,
      };
    case ADD_REPLY_SUCCESS:
      newUserProfile = Object.assign({}, state.userProfile);
      index = newUserProfile.posts.findIndex(
        (post) => post._id === action.data._id
      );
      newUserProfile.posts = [
        ...newUserProfile.posts.slice(0, index),
        action.data,
        ...newUserProfile.posts.slice(index + 1),
      ];
      return {
        ...state,
        userProfile: newUserProfile,
        commentPostError: null,
      };
    case CREATE_CHAT_WITH:
      return { ...state, user: action.data };
    case REMOVE_CHAT_WITH:
      return { ...state, user: action.data };
    default:
      return { ...state };
  }
};

export default userReducer;
