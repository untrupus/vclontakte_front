import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleGroup } from "../../store/actions/groupActions";
import SideBar from "../../components/SideBar/SideBar";
import GroupMainImage from "./GroupMainImage/GroupMainImage";
import GroupHeader from "./GroupHeader/GroupHeader";
import GroupPosts from "./GroupPosts/GroupPosts";
import FriendBlock from "../../components/FriendBlock/FriendBlock";
import PostForm from "../../components/PostForm/PostForm";
import "./SingleGroupPage.css";

const SingleGroupPage = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user.user);
  const singleGroup = useSelector((state) => state.groups.singleGroup);
  const check = singleGroup.members?.find(
    (member) => member.member === user?._id
  );
  /** Fetch selected group data */
  useEffect(() => {
    dispatch(fetchSingleGroup(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  return (
    <div className="singleGroupPage">
      <SideBar />
      <div className="groupColumnCenter">
        <GroupHeader
          name={singleGroup?.name}
          description={singleGroup?.description}
          date={singleGroup?.creationDate}
        />
        {user._id === singleGroup.admin ? (
          <PostForm check="group" id={props.match.params.id} />
        ) : null}
        <GroupPosts
          permit={singleGroup.admin === user._id}
          id={props.match.params.id}
          posts={singleGroup?.posts}
        />
      </div>
      <div className="groupColumnLeft">
        <GroupMainImage
          check={check}
          image={singleGroup?.image}
          id={props.match.params.id}
          remove={user._id === singleGroup?.admin}
        />
        {singleGroup && (
          <FriendBlock title="Members" members={singleGroup?.members} />
        )}
      </div>
    </div>
  );
};

export default SingleGroupPage;
