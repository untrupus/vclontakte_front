import React from 'react';
import {Link} from "react-router-dom";
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="sideBar">
      <Link className='sideBarLink' to="/user">
        <AccountCircleIcon className="sideBarIcon"/> My Page
      </Link>
      <Link className='sideBarLink' to="/news">
        <FiberNewIcon className="sideBarIcon"/> News
      </Link>
      <Link className='sideBarLink' to="/messenger">
        <MailOutlineIcon className="sideBarIcon"/> Messenger
      </Link>
      <Link className='sideBarLink' to="/friends">
       <RecentActorsIcon className="sideBarIcon"/> Friends
      </Link>
      <Link className='sideBarLink' to="/groups">
        <GroupWorkIcon className="sideBarIcon"/> Groups
      </Link>
      <Link className='sideBarLink' to="/photo">
        <PhotoCameraIcon className="sideBarIcon"/> Photo
      </Link>
      <Link className='sideBarLink' to="/music">
        <MusicNoteIcon className="sideBarIcon"/> Music
      </Link>
    </div>
  );
};

export default SideBar;