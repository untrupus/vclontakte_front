import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchGroups } from "../../store/actions/groupActions";
import { api } from "../../constants";
import SideBar from "../../components/SideBar/SideBar";
import SingleGroup from "./SingleGroup";
import SingleRecommendedGroup from "./SingleRecommendedGroup";
import "./MyGroupsPage.css";

const MyGroupsPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user.user);
  const groups = useSelector((state) => state.groups.groups);
  const [groupsVisible, setGroupsVisible] = useState(false);
  useEffect(() => {
    dispatch(fetchGroups());
  }, [dispatch]);
  let groupsList;
  /** Display all groups or user`s groups */
  if (!groupsVisible) {
    groupsList = user.groups.map((group) => {
      return (
        <SingleGroup
          id={group._id}
          key={group._id}
          image={api + group.image}
          name={group.name}
          description={group.description}
        />
      );
    });
  } else {
    groupsList = groups.map((group) => {
      return (
        <SingleGroup
          id={group._id}
          key={group._id}
          image={api + group.image}
          name={group.name}
          description={group.description}
        />
      );
    });
  }
  return (
    <div className="myGroups">
      <SideBar />
      <div className="groupList">
        <div className="groupListHeader">
          <button
            type="button"
            className="groupsHeaderButton"
            onClick={() => setGroupsVisible(false)}
          >
            My Groups
          </button>
          <button
            type="button"
            className="groupsHeaderButton"
            onClick={() => setGroupsVisible(true)}
          >
            All Groups
          </button>
          <button type="button" className="groupsHeaderButton">
            <Link to="/creategroup">Create group</Link>
          </button>
        </div>
        <div className="groups">{groupsList}</div>
      </div>
      <div className="recommended">
        <h4>Recommended groups</h4>
        <SingleRecommendedGroup
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR_6YyZiuNXx6p8eQ5BOkNQAvfLG4pQR9OBgrPeZssET_ziNgaxuqmTE84TeZ-PKwep9k&usqp=CAU"
          name="Test Group 6"
          description={"Lorem ipsum dolor sit amet, consectetur."}
        />
        <SingleRecommendedGroup
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR_6YyZiuNXx6p8eQ5BOkNQAvfLG4pQR9OBgrPeZssET_ziNgaxuqmTE84TeZ-PKwep9k&usqp=CAU"
          name="Test Group 6"
          description={"Lorem ipsum dolor sit amet, consectetur."}
        />
        <SingleRecommendedGroup
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR_6YyZiuNXx6p8eQ5BOkNQAvfLG4pQR9OBgrPeZssET_ziNgaxuqmTE84TeZ-PKwep9k&usqp=CAU"
          name="Test Group 6"
          description={"Lorem ipsum dolor sit amet, consectetur."}
        />
        <SingleRecommendedGroup
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR_6YyZiuNXx6p8eQ5BOkNQAvfLG4pQR9OBgrPeZssET_ziNgaxuqmTE84TeZ-PKwep9k&usqp=CAU"
          name="Test Group 6"
          description={"Lorem ipsum dolor sit amet, consectetur."}
        />
      </div>
    </div>
  );
};

export default MyGroupsPage;
