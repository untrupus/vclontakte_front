import React from "react";
import SingleGroupPost from "./SingleGroupPost";
import { sortByDate } from "../../../helpers";
import PropTypes from "prop-types";
import "./GroupPosts.css";

const GroupPosts = (props) => {
  let posts;
  /** Create constant with posts if they exist */
  if (props.posts?.length === 0) {
    posts = <p>There is nothing here yet...</p>;
  } else {
    posts =
      props.posts &&
      sortByDate(props.posts).map((post) => {
        return (
          <SingleGroupPost
            permit={props.permit}
            key={post._id}
            groupId={props.id}
            postId={post._id}
            text={post.text}
            image={post.image}
            dateTime={post.dateTime}
          />
        );
      });
  }
  return (
    <div className="groupPosts">
      <div className="groupPostsHeader">
        <h4>Group Posts</h4>
      </div>
      <div className="groupPostsInner">{posts}</div>
    </div>
  );
};

export default GroupPosts;

GroupPosts.propTypes = {
  posts: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  permit: PropTypes.bool.isRequired,
};
