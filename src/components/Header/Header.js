import React from 'react';
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {logoutUser} from "../../store/actions/userActions";
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);

  const logout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className="header">
      <div className="headerInner">
        <div className='headerLogo'>
          <PermContactCalendarIcon className="logoIcon"/>
          <Link className='logo' to="/user">
            VCLONTAKTE
          </Link>
        </div>
        {user ? <div className="userInfo">
          <p className="userName">{user.user.displayName}</p>
          <button
            type="button"
            onClick={logout}
          >Logout
          </button>
        </div> : null}
      </div>
    </div>
  );
};

export default Header;