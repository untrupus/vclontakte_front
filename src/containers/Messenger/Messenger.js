import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getInterlocutor,
  getMessages,
  postMessage,
} from "../../store/actions/chatActions";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import SideBar from "../../components/SideBar/SideBar";
import UsersList from "./UsersList";
import "./Messenger.css";
import { api } from "../../constants";

const Messenger = (props) => {
  const dispatch = useDispatch();
  const ws = useRef(null);
  // const inputRef = useRef();
  const user = useSelector((state) => state.user.user?.user);
  const interlocutor = useSelector((state) => state.chat.interlocutor);
  const messages = useSelector((state) => state.chat.messages);
  const [messageText, setMessageText] = useState();
  useEffect(() => {
    dispatch(getInterlocutor(props.match.params.id));
  }, [props.match.params.id, dispatch]);

  useEffect(() => {
    ws.current = new WebSocket(
      "ws://localhost:8000/socket?id=" +
        user._id +
        "&&to=" +
        props.match.params.id
    );

    ws.current.onopen = () => {
      console.log("Chat connection established");
      ws.current.send(JSON.stringify({ type: "GET_ALL_MESSAGES" }));
    };

    ws.current.onmessage = (e) => {
      const decodedMessage = JSON.parse(e.data);
      if (decodedMessage.type === "NEW_MESSAGE") {
        dispatch(postMessage(decodedMessage.message));
      } else if (decodedMessage.type === "ALL_MESSAGES") {
        dispatch(getMessages(decodedMessage.result));
      }
    };

    ws.current.onclose = () => {
      console.log("chat connection closed");
    };

    return () => {
      ws.current.close();
    };
  }, [dispatch, props.match.params.id, user._id]);

  const formSubmit = (e) => {
    e.preventDefault();
    if (messageText !== "") {
      ws.current.send(
        JSON.stringify({
          type: "CREATE_MESSAGE",
          text: messageText,
          from: user._id,
          to: props.match.params.id,
        })
      );
      setMessageText("");
    }
  };

  const messageList = messages.map((message) => {
    if (message.from === user._id) {
      return (
        <div className="myMessage">
          <span className="chatMessageDate">
            <b>At</b> {new Date(message.dateTime).toDateString()}
          </span>
          <p className="chatMessageText">{message.text}</p>
        </div>
      );
    } else {
      return (
        <div className="interlocutorMessage">
          <span className="chatMessageDate">
            <b>At</b> {new Date(message.dateTime).toDateString()}
          </span>
          <p className="chatMessageText">{message.text}</p>
        </div>
      );
    }
  });

  return (
    <div className="messenger">
      <SideBar />
      <div className="chatWindow">
        <div className="chatWindowHeader">
          <img
            src={api + interlocutor.image}
            alt="avatar"
            className="chatUserAvatar"
          />
          <Link className="chatUserName">
            {interlocutor.firstName + " " + interlocutor.lastName}
          </Link>
        </div>
        <div className="messageWindow">
          <div className="messageWindowInner">{messageList}</div>
        </div>
        <form className="messageForm" onSubmit={formSubmit}>
          <input
            type="text"
            value={messageText}
            className="chatMessageInput"
            onChange={(e) => setMessageText(e.target.value)}
          />
          <button className="sendMessage" type="submit">
            Send
          </button>
        </form>
      </div>
      <UsersList chats={user.chats} />
    </div>
  );
};

export default Messenger;

Messenger.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};
