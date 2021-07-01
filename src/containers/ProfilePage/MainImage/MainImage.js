import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFriend, deleteFriend } from "../../../store/actions/friendActions";
import { createChat } from "../../../store/actions/chatActions";
import { api } from "../../../constants";
import noImage from "../../../assets/noImage.jpeg";
import PropTypes from "prop-types";
import "./MainImage.css";
import { Link } from "react-router-dom";

const MainImage = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user.user);
  /** check if a friend is already on the list */
  const check = props.userProfile?.friends?.find(
    (friend) => friend.user === user._id
  );
  const subscribe = () => {
    dispatch(addFriend(props.userProfile?._id));
  };
  const unsubscribe = () => {
    dispatch(deleteFriend(props.userProfile?._id));
  };
  let subscribeButton;
  /** Select subscribe/unsubscibe button */
  if (!check) {
    subscribeButton = (
      <button
        className="linkToEditBtn"
        type="button"
        onClick={() => subscribe()}
      >
        Subscribe
      </button>
    );
  } else {
    subscribeButton = (
      <button
        className="linkToEditBtn"
        type="button"
        onClick={() => unsubscribe()}
      >
        Unsubscribe
      </button>
    );
  }
  const newChat = () => {
    dispatch(
      createChat({
        with: props.userProfile._id,
        firstName: props.userProfile.firstName,
        lastName: props.userProfile.lastName,
        image: props.userProfile.image,
      })
    );
  };
  return (
    <div className="mainImageBlock">
      <img
        src={
          props.userProfile?.image ? api + props.userProfile?.image : noImage
        }
        alt="profileImg"
        className="profileImg"
      />
      {user._id === props.userProfile?._id ? (
        <button className="linkToEditBtn" type="button">
          <Link to="/edit">Edit Profile</Link>
        </button>
      ) : (
        subscribeButton
      )}
      {user._id !== props.userProfile?._id ? (
        <button className="linkToEditBtn" type="button" onClick={newChat}>
          Write Message
        </button>
      ) : null}
    </div>
  );
};

export default MainImage;

MainImage.propTypes = {
  userProfile: PropTypes.object.isRequired,
};
