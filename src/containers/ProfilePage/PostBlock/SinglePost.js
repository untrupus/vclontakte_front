import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { api } from "../../../constants";
import { deletePost, editPost } from "../../../store/actions/postActions";
import PropTypes from "prop-types";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ScreenShareIcon from "@material-ui/icons/ScreenShare";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import EditIcon from "@material-ui/icons/Edit";
import "./PostBlock.css";

const SinglePost = (props) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState(props.text);
  const remove = (id) => {
    dispatch(deletePost(id));
  };
  const edit = (id, data) => {
    dispatch(editPost(id, data));
    setVisible(false);
  };
  return (
    <div className="singlePost">
      <div className="postHeader">
        <img src={api + props.image} alt="avatar" className="postAvatar" />
        <p className="postHeaderTitle">
          {props.name}
          <span className="postDate">
            {" "}
            {new Date(props.dateTime).toDateString()}
          </span>
        </p>
        <HighlightOffIcon
          className="removeIcon"
          onClick={() => remove(props.id)}
        />
      </div>
      <p>{props.text}</p>
      {props.postImage ? (
        <img
          src={api + props.postImage}
          alt={props.postImage}
          className="postImage"
        />
      ) : null}
      <div className="postFooter">
        <FavoriteBorderIcon className="postIcon" />
        <ChatBubbleOutlineIcon className="postIcon" />
        <ScreenShareIcon className="postIcon" />
        <EditIcon className="postIcon" onClick={() => setVisible(true)} />
      </div>
      {visible ? (
        <div className="editBlock">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="postField"
          />
          <button type="button" onClick={() => setVisible(false)}>
            Cancel
          </button>
          <button type="button" onClick={() => edit(props.id, { text })}>
            Edit
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default SinglePost;

SinglePost.propTypes = {
  text: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  dateTime: PropTypes.string.isRequired,
  postImage: PropTypes.string,
  id: PropTypes.string.isRequired,
};
