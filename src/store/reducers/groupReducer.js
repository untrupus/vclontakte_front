import {
  CREATE_GROUP_FAILURE,
  CREATE_GROUP_SUCCESS,
  DELETE_GROUP_FAILURE,
  DELETE_GROUP_SUCCESS,
  EDIT_GROUP_FAILURE,
  EDIT_GROUP_SUCCESS,
  FETCH_GROUPS_FAILURE,
  FETCH_GROUPS_SUCCESS,
  FETCH_SINGLE_GROUP_FAILURE,
  FETCH_SINGLE_GROUP_SUCCESS,
  LEAVE_GROUP_SUCCESS,
  JOIN_GROUP_SUCCESS,
  LEAVE_GROUP_FAILURE,
  JOIN_GROUP_FAILURE,
  ADD_GROUP_POST_FAILURE,
  ADD_GROUP_POST_SUCCESS,
  DELETE_GROUP_POST_FAILURE,
  DELETE_GROUP_POST_SUCCESS,
} from "../actionTypes";

const initialState = {
  groups: [],
  singleGroup: {},
  fetchGroupsError: null,
  fetchSingleGroupError: null,
  createGroupError: null,
  deleteGroupError: null,
  editGroupError: null,
  leaveGroupError: null,
  joinGroupError: null,
};

const groupReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GROUPS_SUCCESS:
      return { ...state, groups: action.data, fetchGroupsError: null };
    case FETCH_GROUPS_FAILURE:
      return { ...state, fetchGroupsError: action.error };
    case FETCH_SINGLE_GROUP_SUCCESS:
      return {
        ...state,
        singleGroup: action.data,
        fetchSingleGroupError: null,
      };
    case FETCH_SINGLE_GROUP_FAILURE:
      return { ...state, fetchSingleGroupError: action.error };
    case JOIN_GROUP_SUCCESS:
      return { ...state, singleGroup: action.data.group, joinGroupError: null };
    case JOIN_GROUP_FAILURE:
      return { ...state, joinGroupError: action.error };
    case LEAVE_GROUP_SUCCESS:
      return {
        ...state,
        singleGroup: action.data.group,
        leaveGroupError: null,
      };
    case LEAVE_GROUP_FAILURE:
      return { ...state, leaveGroupError: action.error };
    case ADD_GROUP_POST_SUCCESS:
      return { ...state, singleGroup: action.data };
    case DELETE_GROUP_POST_SUCCESS:
      return { ...state, singleGroup: action.data };
    default:
      return { ...state };
  }
};

export default groupReducer;
