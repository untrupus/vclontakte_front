import React from "react";
import { api } from "../../../constants";
import {
  joinGroup,
  leaveGroup,
  deleteGroup,
} from "../../../store/actions/groupActions";
import PropTypes from "prop-types";
import "./GroupMainImage.css";
import { useDispatch } from "react-redux";

const GroupMainImage = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="groupMainImage">
      <img src={api + props.image} alt="group avatar" className="groupImg" />
      {!props.check ? (
        <button
          className="joinBtn"
          onClick={() => dispatch(joinGroup(props.id))}
        >
          Join
        </button>
      ) : (
        <button
          className="joinBtn"
          onClick={() => dispatch(leaveGroup(props.id))}
        >
          Leave
        </button>
      )}
      {props.remove ? (
        <button
          className="joinBtn"
          onClick={() => dispatch(deleteGroup(props.id))}
        >
          Delete Group
        </button>
      ) : null}
    </div>
  );
};

export default GroupMainImage;

GroupMainImage.propTypes = {
  image: PropTypes.string.isRequired,
  check: PropTypes.bool.isRequired,
  remove: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};
