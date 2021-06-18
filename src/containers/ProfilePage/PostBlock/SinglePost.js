import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { api } from "../../../constants";
import {
  deletePost,
  editPost,
  addPost,
  commentPost,
  likePost,
} from "../../../store/actions/postActions";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import SingleComment from "./SingleComment";
import Badge from "@material-ui/core/Badge";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ScreenShareIcon from "@material-ui/icons/ScreenShare";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import EditIcon from "@material-ui/icons/Edit";
import "./PostBlock.css";

const SinglePost = (props) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [commentVisible, setCommentVisible] = useState(false);
  const [text, setText] = useState(props.text);
  const [commentText, setCommentText] = useState("");
  /** Remove post */
  const remove = (id) => {
    dispatch(deletePost(id));
  };
  /** Edit post */
  const edit = (id, data) => {
    dispatch(editPost(id, data));
    setVisible(false);
  };
  const repost = () => {
    const newRepost = {
      text: props.text,
      image: props.postImage,
      repostFromUser: {
        user: props.userId,
        name: props.name,
        image: props.image,
      },
    };
    dispatch(addPost(newRepost));
  };
  /** Add Comment */
  const addComment = () => {
    dispatch(
      commentPost(props.userId, {
        postId: props.id,
        text: commentText,
      })
    );
    setCommentText("");
  };
  /** Like or unlike post */
  const like = () => {
    dispatch(
      likePost(props.userId, {
        postId: props.id,
      })
    );
  };
  /** Render comments */
  let comments;
  if (props.comments.length === 0) {
    comments = <span>add first comment</span>;
  } else {
    comments = props.comments.map((comment) => {
      return (
        <SingleComment
          key={comment._id}
          id={comment.user}
          commentId={comment._id}
          postId={props.id}
          replies={comment.replies}
          image={comment.image}
          name={comment.firstName}
          dateTime={comment.dateTime}
          text={comment.text}
        />
      );
    });
  }
  return (
    <div className="singlePost">
      <div className="postHeader">
        <img src={api + props.image} alt="avatar" className="postAvatar" />
        <p className="postHeaderTitle">
          {props.name}
          <span className="postDate">
            {new Date(props.dateTime).toDateString()}
          </span>
        </p>
        <HighlightOffIcon
          className="removeIcon"
          onClick={() => remove(props.id)}
        />
      </div>
      {props.repost ? (
        <div className="repost">
          <p className="repostFrom">Repost from:</p>
          <img
            src={api + props.repost.image}
            alt="avatar"
            className="postAvatar"
          />
          <Link to={"/user/" + props.repost.user} className="postHeaderTitle">
            {props.repost.name}
          </Link>
        </div>
      ) : null}
      <p>{props.text}</p>
      {props.postImage ? (
        <img
          src={api + props.postImage}
          alt={props.postImage}
          className="postImage"
        />
      ) : null}
      <div className="postFooter">
        <Badge badgeContent={props.likes.length} color="error">
          <FavoriteBorderIcon className="postIcon" onClick={() => like()} />
        </Badge>
        <Badge badgeContent={props.comments.length} color="error">
          <ChatBubbleOutlineIcon
            className="postIcon"
            onClick={() => setCommentVisible(true)}
          />
        </Badge>
        <ScreenShareIcon className="postIcon" onClick={repost} />
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
      {commentVisible ? (
        <div className="commentsBlock">
          {comments}
          <div className="editBlock">
            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="postField"
            />
            <button type="button" onClick={() => addComment()}>
              Add
            </button>
          </div>
          <button onClick={() => setCommentVisible(false)}>
            hide comments
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
  userId: PropTypes.string.isRequired,
  repost: PropTypes.object,
  comments: PropTypes.array,
  likes: PropTypes.array,
};
