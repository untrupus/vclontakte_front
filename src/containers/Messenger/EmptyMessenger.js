import React from "react";
import { useSelector } from "react-redux";
import SideBar from "../../components/SideBar/SideBar";
import UsersList from "./UsersList";
import "./Messenger.css";

const EmptyMessenger = () => {
  const user = useSelector((state) => state.user.user?.user);
  return (
    <div className="messenger">
      <SideBar />
      <div className="chatWindow">
        <div className="chatWindowHeader">
          <img
            src="https://img2.freepng.ru/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg"
            alt="avatar"
            className="chatUserAvatar"
          />
          <p className="chatUserName">Start a conversation</p>
        </div>
        <div className="messageWindow"></div>
      </div>
      <UsersList chats={user.chats} />
    </div>
  );
};

export default EmptyMessenger;
