import React from "react";
import PropTypes from "prop-types";
import "./GroupHeader.css";

const GroupHeader = (props) => {
  return (
    <div className="groupHeader">
      <h2 className="groupTitle">{props.name}</h2>
      <p className="groupDescription">{props.description}</p>
      <span>Creation date: {new Date(props.date).toDateString()}</span>
    </div>
  );
};

export default GroupHeader;

GroupHeader.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
