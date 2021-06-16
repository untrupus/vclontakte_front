import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./MyGroupsPage.css";

const SingleGroup = (props) => {
  return (
    <div className="singleGroup">
      <img src={props.image} alt={props.name} className="singleGroupAvatar" />
      <div className="singleGroupAbout">
        <Link className="singleGroupLink" to={"/groups/" + props.id}>
          {props.name}
        </Link>
        <p className="singleGroupDescription">{props.description}</p>
      </div>
    </div>
  );
};

export default SingleGroup;

SingleGroup.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
