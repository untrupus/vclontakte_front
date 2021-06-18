import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addReply } from "../../../store/actions/postActions";
import { Link } from "react-router-dom";
import { api } from "../../../constants";
import SingleReply from "./SingleReply";
import PropTypes from "prop-types";
import "./PostBlock.css";

const SingleComment = (props) => {
  const dispatch = useDispatch();
  const [replyText, setReplyText] = useState("");
  const [visibleInput, setVisibleInput] = useState(false);
  /** Add reply to comment */
  const add = () => {
    if (replyText !== "") {
      dispatch(
        addReply(props.id, {
          text: replyText,
          postId: props.postId,
          commentId: props.commentId,
        })
      );
      setReplyText("");
    }
  };
  /** Render replies */
  let replies;
  if (props.replies.length > 0) {
    replies = props.replies.map((rep) => {
      return (
        <SingleReply
          key={rep._id}
          text={rep.text}
          name={rep.firstName}
          image={rep.image}
          nameTo={rep.to.firstName}
        />
      );
    });
  }
  return (
    <div className="singleComment">
      <div className="commentHeader">
        <img src={api + props.image} alt="" className="commentAvatar" />
        <Link to={"/user/" + props.id} className="commentLink">
          {props.name}
        </Link>
        <span>At {new Date(props.dateTime).toDateString()}</span>
        <button onClick={() => setVisibleInput(true)}>Reply</button>
      </div>
      <p>{props.text}</p>
      {replies}
      {visibleInput ? (
        <div className="addReply">
          <input
            type="text"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          />
          <button onClick={() => setVisibleInput(false)}>Cancel</button>
          <button onClick={() => add()}>Add</button>
        </div>
      ) : null}
    </div>
  );
};

export default SingleComment;

SingleComment.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  dateTime: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
  commentId: PropTypes.string,
  postId: PropTypes.string,
  replies: PropTypes.array,
};
