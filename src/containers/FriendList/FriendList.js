import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers, getUserProfile } from "../../store/actions/userActions";
import { Link } from "react-router-dom";
import { api } from "../../constants";
import SideBar from "../../components/SideBar/SideBar";
import "./FriendList.css";

const FriendList = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user.user);
  const users = useSelector((state) => state.user.allUsers);
  const userProfile = useSelector((state) => state.user.userProfile);
  const [friendVisible, setFriendsVisible] = useState(false);
  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getUserProfile(user._id));
  }, [dispatch, user._id]);
  let usersList;
  /** Choose what data is needed to display. User friends or all users */
  if (!friendVisible) {
    usersList = userProfile?.friends.map((friend) => {
      return (
        <div className="singleFriend" key={friend.image}>
          <img
            src={api + friend.image}
            alt="friendAvatar"
            className="friendAvatar"
          />
          <Link to={"/user/" + friend.user}>{friend.firstName}</Link>
        </div>
      );
    });
  } else {
    usersList = users.map((user) => {
      return (
        <div className="singleFriend" key={user.image}>
          <img
            src={api + user.image}
            alt="friendAvatar"
            className="friendAvatar"
          />
          <Link className="friendsLink" to={"/user/" + user._id}>
            {user.firstName + " " + user.lastName}
          </Link>
        </div>
      );
    });
  }
  return (
    <div className="friendList">
      <SideBar />
      <div className="friendListInner">
        <div className="friendsButtons">
          <button
            onClick={() => setFriendsVisible(false)}
            className="friendsButton"
          >
            My Friends
          </button>
          <button
            onClick={() => setFriendsVisible(true)}
            className="friendsButton"
          >
            All users
          </button>
        </div>
        {usersList}
      </div>
    </div>
  );
};

export default FriendList;
