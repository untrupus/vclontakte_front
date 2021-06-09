import React from 'react';
import {useSelector} from "react-redux";
import {api} from "../../../constants";
import {Link} from "react-router-dom";
import "./PhotoBlock.css";

const PhotoBlock = () => {
  const user = useSelector(state => state.user.user.user);
  const filterPosts = user.posts.filter(post => post.image);
  const sortedPosts = filterPosts.sort((a, b) => {
    return new Date(b.dateTime) - new Date(a.dateTime);
  });

  const photos = sortedPosts.map(post => {
    return (
      <img
        key={post._id}
        src={api + post.image}
        alt={post.image}
        className="photoBlockImg"
      />
    );
  });

  return (
    <div className="photoBlock">
      <Link className="photoLink" to="/photo">My photos {filterPosts.length}</Link>
      <div className="photos">
        {photos}
      </div>
    </div>
  );
};

export default PhotoBlock;