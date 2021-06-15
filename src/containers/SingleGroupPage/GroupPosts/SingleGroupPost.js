import React from "react";
import { useDispatch } from "react-redux";
import { api } from "../../../constants";
import { deleteGroupPost } from "../../../store/actions/groupActions";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ScreenShareIcon from "@material-ui/icons/ScreenShare";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import "./GroupPosts.css";

const SingleGroupPost = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="singleGroupPost">
      <div className="groupPostText">
        <p className="groupPostDate">
          At: {new Date(props.dateTime).toDateString()}
        </p>
        {props.text ? <p>{props.text}</p> : null}
      </div>
      {props.image ? (
        <img src={api + props.image} alt="postImage" className="groupPostImg" />
      ) : null}
      <div className="groupPostFooter">
        {props.permit ? (
          <DeleteForeverIcon
            className="postIcon"
            onClick={() =>
              dispatch(deleteGroupPost(props.groupId, props.postId))
            }
          />
        ) : null}
        <FavoriteBorderIcon className="postIcon" />
        <ChatBubbleOutlineIcon className="postIcon" />
        <ScreenShareIcon className="postIcon" />
      </div>
    </div>
  );
};

export default SingleGroupPost;
