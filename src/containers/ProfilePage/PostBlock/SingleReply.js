import React from "react";
import { api } from "../../../constants";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./PostBlock.css";

const SingleReply = (props) => {
  return (
    <div className="singleReply">
      <div className="replyHeader">
        <img
          src={api + props.image}
          alt="replyAvatar"
          className="replyAvatar"
        />
        <Link className="replyName" to={"/user/" + props.id}>
          {props.name}
        </Link>
        <span>replied to </span>
        <Link className="repliedTo" to={"/user/" + props.linkTo}>
          {props.nameTo}
        </Link>
      </div>
      <p>{props.text}</p>
    </div>
  );
};

SingleReply.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  nameTo: PropTypes.string,
  id: PropTypes.string,
  text: PropTypes.string,
  linkTo: PropTypes.string,
};

export default SingleReply;
