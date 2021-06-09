import React from 'react';
import {useSelector} from "react-redux";
import SideBar from "../../components/SideBar/SideBar";
import InfoBlock from "./InfoBlock/InfoBlock";
import PhotoBlock from "./PhotoBlock/PhotoBlock";
import FriendBlock from "./FriendBlock/FriendBlock";
import GroupBlock from "./GroupBlock/GroupBlock";
import MainImage from "./MainImage/MainImage";
import PostForm from "./PostForm/PostForm";
import PostBlock from "./PostBlock/PostBlock";
import "./ProfilePage.css";

const ProfilePage = () => {
  const user = useSelector(state => state.user.user.user);

  return (
    <div className="profilePage">
      <SideBar/>
      <div className="columnLeft">
        <MainImage user={user}/>
        <FriendBlock/>
        <GroupBlock/>
      </div>
      <div className="columnRight">
        <InfoBlock
          user={user}
        />
        <PhotoBlock/>
        <PostForm/>
        <PostBlock
          image={user.image}
          name={user.firstName + " " + user.lastName}
        />
      </div>
    </div>
  );
};

export default ProfilePage;