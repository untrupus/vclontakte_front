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
import axiosApi from "../../axiosApi";
import { push } from "connected-react-router";

const fetchGroupsFailure = (error) => {
  return { type: FETCH_GROUPS_FAILURE, error };
};

const fetchGroupsSuccess = (data) => {
  return { type: FETCH_GROUPS_SUCCESS, data };
};

export const fetchGroups = () => {
  return async (dispatch) => {
    try {
      const response = await axiosApi.get("/groups");
      dispatch(fetchGroupsSuccess(response.data));
    } catch (e) {
      dispatch(fetchGroupsFailure(e));
    }
  };
};

export const fetchUserGroups = (id) => {
  return async (dispatch) => {
    try {
      const response = await axiosApi.get("/groups?user=" + id);
      dispatch(fetchGroupsSuccess(response.data));
    } catch (e) {
      dispatch(fetchGroupsFailure(e));
    }
  };
};

const fetchSingleGroupFailure = (error) => {
  return { type: FETCH_SINGLE_GROUP_FAILURE, error };
};

const fetchSingleGroupSuccess = (data) => {
  return { type: FETCH_SINGLE_GROUP_SUCCESS, data };
};

export const fetchSingleGroup = (id) => {
  return async (dispatch) => {
    try {
      const response = await axiosApi.get("/groups/" + id);
      dispatch(fetchSingleGroupSuccess(response.data));
    } catch (e) {
      dispatch(fetchSingleGroupFailure(e));
    }
  };
};

const createGroupFailure = (error) => {
  return { type: CREATE_GROUP_FAILURE, error };
};

const createGroupSuccess = (data) => {
  return { type: CREATE_GROUP_SUCCESS, data };
};

export const createGroup = (data) => {
  return async (dispatch) => {
    try {
      const response = await axiosApi.post("/groups", data);
      dispatch(createGroupSuccess(response.data));
      dispatch(push("/groups/" + response.data._id));
    } catch (e) {
      dispatch(createGroupFailure(e));
    }
  };
};

const deleteGroupFailure = (error) => {
  return { type: DELETE_GROUP_FAILURE, error };
};

const deleteGroupSuccess = () => {
  return { type: DELETE_GROUP_SUCCESS };
};

export const deleteGroup = (id) => {
  return async (dispatch) => {
    try {
      await axiosApi.delete("/groups/" + id);
      dispatch(push("/mygroups"));
      dispatch(deleteGroupSuccess());
    } catch (e) {
      deleteGroupFailure(e);
    }
  };
};

const joinGroupSuccess = (data) => {
  return { type: JOIN_GROUP_SUCCESS, data };
};

const joinGroupFailure = (error) => {
  return { type: JOIN_GROUP_FAILURE, error };
};

export const joinGroup = (id) => {
  return async (dispatch) => {
    try {
      const response = await axiosApi.patch("/groups/join/" + id);
      dispatch(joinGroupSuccess(response.data));
    } catch (e) {
      dispatch(joinGroupFailure(e));
    }
  };
};

const leaveGroupSuccess = (data) => {
  return { type: LEAVE_GROUP_SUCCESS, data };
};

const leaveGroupFailure = (error) => {
  return { type: LEAVE_GROUP_FAILURE, error };
};

export const leaveGroup = (id) => {
  return async (dispatch) => {
    try {
      const response = await axiosApi.patch("/groups/leave/" + id);
      dispatch(leaveGroupSuccess(response.data));
    } catch (e) {
      dispatch(leaveGroupFailure(e));
    }
  };
};

const addGroupPostSuccess = (data) => {
  return { type: ADD_GROUP_POST_SUCCESS, data };
};

const addGroupPostFailure = (error) => {
  return { type: ADD_GROUP_POST_FAILURE, error };
};

export const addGroupPost = (id, data) => {
  return async (dispatch) => {
    try {
      const response = await axiosApi.patch("/groups/create_post/" + id, data);
      dispatch(addGroupPostSuccess(response.data));
    } catch (e) {
      dispatch(addGroupPostFailure(e));
    }
  };
};

const deleteGroupPostSuccess = (data) => {
  return { type: DELETE_GROUP_POST_SUCCESS, data };
};

const deleteGroupPostFailure = (error) => {
  return { type: DELETE_GROUP_POST_FAILURE, error };
};

export const deleteGroupPost = (id, data) => {
  return async (dispatch) => {
    try {
      const response = await axiosApi.patch(
        "/groups/remove_post/" + id + "?post=" + data
      );
      dispatch(deleteGroupPostSuccess(response.data));
    } catch (e) {
      dispatch(deleteGroupPostFailure(e));
    }
  };
};
