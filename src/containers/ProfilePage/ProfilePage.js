import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserProfile } from "../../store/actions/userActions";
import SideBar from "../../components/SideBar/SideBar";
import InfoBlock from "./InfoBlock/InfoBlock";
import PhotoBlock from "./PhotoBlock/PhotoBlock";
import FriendBlock from "../../components/FriendBlock/FriendBlock";
import GroupBlock from "./GroupBlock/GroupBlock";
import MainImage from "./MainImage/MainImage";
import PostForm from "../../components/PostForm/PostForm";
import PostBlock from "./PostBlock/PostBlock";
import "./ProfilePage.css";

const ProfilePage = (props) => {
  const userProfile = useSelector((state) => state.user.userProfile);
  const user = useSelector((state) => state.user.user.user);
  const dispatch = useDispatch();
  /** Fetch user data */
  useEffect(() => {
    dispatch(getUserProfile(props.match.params.id));
  }, [dispatch, props.match.params.id]);
  return (
    <div className="profilePage">
      <SideBar />
      <div className="columnLeft">
        {userProfile && <MainImage userProfile={userProfile} />}
        {userProfile && (
          <FriendBlock members={userProfile?.friends} title="Friends" />
        )}
        {userProfile && <GroupBlock groups={userProfile?.groups} />}
      </div>
      <div className="columnRight">
        {userProfile && <InfoBlock userProfile={userProfile} />}
        {userProfile && <PhotoBlock posts={userProfile?.posts} />}
        {user?._id === userProfile?._id ? <PostForm check={"profile"} /> : null}
        {userProfile && <PostBlock user={userProfile} />}
      </div>
    </div>
  );
};

export default ProfilePage;
