import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  editProfile,
  getUserProfile,
} from "../../../store/actions/userActions";
import PropTypes from "prop-types";
import EditIcon from "@material-ui/icons/Edit";
import "./InfoBlock.css";

const InfoBlock = ({ userProfile }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user.user);
  const photoCount = userProfile.posts?.filter((post) => post.image);
  const friendsCount = userProfile?.friends.length;
  const [status, setStatus] = useState(userProfile.status);
  const [visible, setVisible] = useState(false);
  /** Change user status. Works strange. Need to fix */
  const changeStatus = async () => {
    await dispatch(editProfile({ status }));
    dispatch(getUserProfile(user._id));
    setVisible(false);
  };
  return (
    <div className="infoBlock">
      <div className="infoTop">
        <h3>{userProfile.firstName + " " + userProfile.lastName}</h3>
        <div className="status">
          <span className="description">{userProfile.status}</span>
          {userProfile && user._id === userProfile._id ? (
            <EditIcon className="editIcon" onClick={() => setVisible(true)} />
          ) : null}
        </div>
        {visible ? (
          <div className="statusForm">
            <input
              type="text"
              className="statusField"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
            <button type="button" onClick={() => setVisible(false)}>
              Cancel
            </button>
            <button type="button" onClick={changeStatus}>
              Edit
            </button>
          </div>
        ) : null}
      </div>
      <div className="infoMain">
        {userProfile.birthDate ? (
          <p className="infoDescription">
            <b>Birth Date: </b>
            {new Date(userProfile.birthDate).toDateString().substr(4)}
          </p>
        ) : null}
        {userProfile.city ? (
          <p className="infoDescription">
            <b>City:</b> {userProfile.city}
          </p>
        ) : null}
        {userProfile.status ? (
          <p className="infoDescription">
            <b>Relationships:</b> {userProfile.relationships}
          </p>
        ) : null}
        {userProfile.gender ? (
          <p className="infoDescription">
            <b>Gender:</b> {userProfile.gender}
          </p>
        ) : null}
      </div>
      <div className="infoBottom">
        <div className="infoBottomItem">
          <h4>{friendsCount}</h4>
          <p>friends</p>
        </div>
        <div className="infoBottomItem">
          <h4>{photoCount.length}</h4>
          <p>photos</p>
        </div>
        <div className="infoBottomItem">
          <h4>23</h4>
          <p>audio</p>
        </div>
      </div>
    </div>
  );
};

export default InfoBlock;

InfoBlock.propTypes = {
  userProfile: PropTypes.object.isRequired,
};
