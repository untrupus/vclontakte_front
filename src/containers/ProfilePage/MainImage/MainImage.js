import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFriend, deleteFriend } from "../../../store/actions/friendActions";
import { api } from "../../../constants";
import noImage from "../../../assets/noImage.jpeg";
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
    </div>
  );
};

export default MainImage;
