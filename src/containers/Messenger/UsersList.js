import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { removeChat } from "../../store/actions/chatActions";
import { api } from "../../constants";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import "./Messenger.css";

const UsersList = (props) => {
  const dispatch = useDispatch();
  const remove = (id) => {
    dispatch(removeChat(id));
  };
  let chats;
  if (props.chats.length === 0) {
    chats = <p>Nobody`s her...</p>;
  } else {
    chats = props.chats.map((chat) => {
      return (
        <div className="singleChat" key={chat._id}>
          <img src={api + chat.image} alt="avatar" className="chatUserAvatar" />
          <Link className="userListName" to={"/messenger/" + chat.with}>
            {chat.firstName + " " + chat.lastName}
          </Link>
          <HighlightOffIcon
            className="removeChatIcon"
            onClick={() => remove(chat.with)}
          />
        </div>
      );
    });
  }
  return <div className="usersList">{chats}</div>;
};

export default UsersList;

UsersList.propTypes = {
  chats: PropTypes.array,
};
