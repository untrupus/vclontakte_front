import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../store/actions/userActions";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import { api } from "../../constants";
import noImage from "../../assets/noImage.jpeg";
import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user?.user);

  const logout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className="header">
      <div className="headerInner">
        <div className="headerLogo">
          <PermContactCalendarIcon className="logoIcon" />
          <h2 className="logo">VCLONTAKTE</h2>
        </div>
        {user ? (
          <div className="userInfo">
            <img
              src={user.image ? api + user.image : noImage}
              alt="avatar"
              className="headerAvatar"
            />
            <p className="userName">
              {user.firstName} {user.lastName}
            </p>
            <button type="button" onClick={logout}>
              Logout
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
