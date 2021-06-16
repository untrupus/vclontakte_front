import React from "react";
import { Link } from "react-router-dom";
import { api } from "../../../constants";
import { sort } from "../../../helpers";
import PropTypes from "prop-types";
import "./GroupBlock.css";

const GroupBlock = (props) => {
  /** Display 6 random user groups */
  const groupsList = sort(props.groups).map((group) => {
    return (
      <div className="groupDescriptionProfile" key={group.image}>
        <img src={api + group.image} alt="groupImg" className="groupAvatar" />
        <Link to={"/groups/" + group.group} className="groupNameSorted">
          {group.name}
        </Link>
      </div>
    );
  });
  return (
    <div className="groupBlock">
      <h5>
        <Link to="/mygroups" className="linkToMyGroups">
          Groups ({props.groups.length})
        </Link>
      </h5>
      <div className="myGroupsBlock">{groupsList}</div>
    </div>
  );
};

export default GroupBlock;

GroupBlock.propTypes = {
  groups: PropTypes.array.isRequired,
};
