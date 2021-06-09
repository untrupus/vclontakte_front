import React from 'react';
import {api} from "../../../constants";
import noImage from "../../../assets/noImage.jpeg";
import "./MainImage.css";
import {Link} from "react-router-dom";

const MainImage = (props) => {
  return (
    <div className="mainImageBlock">
      <img
        src={props.user.image ? api + props.user.image : noImage}
           alt="profileImg"
           className="profileImg"
      />
      <button
        className="linkToEditBtn"
        type="button"
      ><Link to="/edit">
        Edit Profile
      </Link>
      </button>
    </div>
  );
};

export default MainImage;