import React from "react";
import { api } from "../../../constants";
import { Link } from "react-router-dom";
import { sortByDate } from "../../../helpers";
import PropTypes from "prop-types";
import "./PhotoBlock.css";

const PhotoBlock = (props) => {
  const filterPosts = props.posts?.filter((post) => post.image);
  /** Sort photos by creation date */
  const photos = sortByDate(filterPosts)?.map((post) => {
    return (
      <img
        key={post?._id}
        src={api + post.image}
        alt={post.image}
        className="photoBlockImg"
      />
    );
  });
  return (
    <div className="photoBlock">
      <Link className="photoLink" to={"/photo/" + props.id}>
        Photos {filterPosts?.length}
      </Link>
      <div className="photos">{photos}</div>
    </div>
  );
};

export default PhotoBlock;

PhotoBlock.propTypes = {
  posts: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
};
