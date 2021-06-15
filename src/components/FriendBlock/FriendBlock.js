import React from "react";
import { api } from "../../constants";
import { Link } from "react-router-dom";
import { sort } from "../../helpers";
import noImage from "../../assets/noImage.jpeg";
import "./FriendBlock.css";

const FriendBlock = (props) => {
  /** Return six random friends from friends list */
  const users = sort(props.members).map((user) => {
    return (
      <div className="singleFriendBlock" key={user.user}>
        <img
          src={user.image ? api + user.image : noImage}
          alt={user.firstName}
          className="singleFriendAvatar"
        />
        <Link className="singleFriendName" to={"/user/" + user.user}>
          {user.firstName}
        </Link>
      </div>
    );
  });

  return (
    <div className="friendBlock">
      <h5>
        <Link to="/friends" className="linkToMyGroups">
          {props.title} ({users.length})
        </Link>
      </h5>
      <div className="friendBlockInner">{users}</div>
    </div>
  );
};

export default FriendBlock;
