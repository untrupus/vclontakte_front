import React from 'react';
import {api} from "../../../constants";
import noImage from "../../../assets/noImage.jpeg"
import "./FriendBlock.css";

const FriendBlock = () => {
  return (
    <div className="friendBlock">
      <h5>My Friends (23)</h5>
      <div className="friendBlockInner">
        <div className="singleFriend">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Darth_Vader_in_The_Empire_Strikes_Back.jpg/220px-Darth_Vader_in_The_Empire_Strikes_Back.jpg"
            alt="sdfgdfg"
            className="singleFriendAvatar"
          />
          <p className="singleFriendName">hjgjhgj</p>
        </div>
        <div className="singleFriend">
          <img
            src="https://pbs.twimg.com/profile_images/416471119147696128/FABETYL-_400x400.jpeg"
            alt="sdfgdfg"
            className="singleFriendAvatar"
          />
          <p className="singleFriendName">dfgfgdgf</p>
        </div>
        <div className="singleFriend">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI3TsWoUrBZ0HfgIALktp-dyESDOAtfVQB4g&usqp=CAU"
            alt="sdfgdfg"
            className="singleFriendAvatar"
          />
          <p className="singleFriendName">dfdfhdfh</p>
        </div>
        <div className="singleFriend">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYxTigxAzX9_zK0oeFyehDc-R51cfyEbZgUdb2XZ6JIDBHxYf4p_YzT4Rs3_AzlpGIWHM&usqp=CAU"
            alt="sdfgdfg"
            className="singleFriendAvatar"
          />
          <p className="singleFriendName">dfgdfhdfh</p>
        </div>
        <div className="singleFriend">
          <img
            src="https://static.memrise.com/img/400sqf/from/uploads/course_photos/9323489000160113115640.png"
            alt="sdfgdfg"
            className="singleFriendAvatar"
          />
          <p className="singleFriendName">dfgdfhfhg</p>
        </div>
      </div>
    </div>
  );
};

export default FriendBlock;