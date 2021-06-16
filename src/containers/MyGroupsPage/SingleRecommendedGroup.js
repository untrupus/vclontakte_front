import React from "react";
import PropTypes from "prop-types";
import "./MyGroupsPage.css";
import { Link } from "react-router-dom";

const SingleRecommendedGroup = (props) => {
  return (
    <div className="singleRecommendedGroup">
      <img
        src={props.image}
        alt={props.name}
        className="singleRecommendedGroupAvatar"
      />
      <div className="singleRecommendedGroupAbout">
        <Link className="singleRecommendedGroupLink" to="/">
          {props.name}
        </Link>
        <p className="singleRecommendedGroupDescription">{props.description}</p>
      </div>
    </div>
  );
};

export default SingleRecommendedGroup;

SingleRecommendedGroup.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
};
