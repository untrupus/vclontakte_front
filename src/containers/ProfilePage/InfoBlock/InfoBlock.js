import React from 'react';
import "./InfoBlock.css";

const InfoBlock = ({user}) => {
  const photoCount = user.posts.filter(post => post.image);

  return (
    <div className="infoBlock">
      <div className="infoTop">
        <h3>{user.firstName + " " + user.lastName}</h3>
        <span className="description">Lorem ipsum dolor sit amet.</span>
      </div>
      <div className="infoMain">
        {/*{user.dayOfBirth ? <p className="infoDescription">Day Of Birth: {user.dayOfBirth}</p> : null}*/}
        {user.city ? <p className="infoDescription">City: {user.city}</p> : null}
        {user.status ? <p className="infoDescription">Status: {user.status}</p> : null}
        {user.gender ? <p className="infoDescription">Gender: {user.gender}</p> : null}
      </div>
      <div className="infoBottom">
        <div className="infoBottomItem">
          <h4>12</h4>
          <p>friends</p>
        </div>
        <div className="infoBottomItem">
          <h4>{photoCount.length}</h4>
          <p>photos</p>
        </div>
        <div className="infoBottomItem">
          <h4>23</h4>
          <p>audio</p>
        </div>
      </div>
    </div>
  );
};

export default InfoBlock;