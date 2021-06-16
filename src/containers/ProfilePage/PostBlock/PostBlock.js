import React from "react";
import SinglePost from "./SinglePost";
import { sortByDate } from "../../../helpers";
import PropTypes from "prop-types";
import "./PostBlock.css";

const PostBlock = (props) => {
  const posts = sortByDate(props.user.posts).map((post) => {
    return (
      <SinglePost
        key={post._id}
        id={post._id}
        name={props.user.firstName + " " + props.user.lastName}
        image={props.user.image}
        dateTime={post.dateTime}
        text={post.text}
        postImage={post.image}
      />
    );
  });
  return (
    <div className="postBlock">
      {posts.length === 0 ? <p>There is nothing here yet...</p> : posts}
    </div>
  );
};

export default PostBlock;

PostBlock.propTypes = {
  user: PropTypes.object.isRequired,
};
