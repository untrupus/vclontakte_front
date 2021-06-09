import React from 'react';
import {useSelector} from "react-redux";
import SinglePost from "./SinglePost";
import "./PostBlock.css";

const PostBlock = () => {
  const user = useSelector(state => state.user.user.user);
  const sortedPosts = user.posts.sort((a, b) => {
    return new Date(b.dateTime) - new Date(a.dateTime);
  });
  const posts = sortedPosts.map(post => {
    return (
      <SinglePost
        key={post._id}
        id={post._id}
        name={user.firstName + " " + user.lastName}
        image={user.image}
        dateTime={post.dateTime}
        text={post.text}
        postImage={post.image}
      />
    );
  });
  return (
    <div className="postBlock">
      {posts}
    </div>
  );
};

export default PostBlock;