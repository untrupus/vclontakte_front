import React from "react";
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
