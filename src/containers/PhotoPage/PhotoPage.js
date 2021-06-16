import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserProfile } from "../../store/actions/userActions";
import SideBar from "../../components/SideBar/SideBar";
import { sortByDate } from "../../helpers";
import { api } from "../../constants";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./PhotoPage.css";
import PropTypes from "prop-types";

const PhotoPage = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfile(props.match.params.id));
  }, [dispatch, props.match.params.id]);
  const userProfile = useSelector((state) => state.user.userProfile);
  const filterPosts =
    userProfile && userProfile.posts?.filter((post) => post.image);
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");
  const handleOpen = (img) => {
    setOpen(true);
    setImage(img);
  };
  const handleClose = () => {
    setOpen(false);
    setImage("");
  };
  let photos;
  if (userProfile && filterPosts.length > 0) {
    photos = sortByDate(filterPosts).map((post) => {
      return (
        <img
          src={api + post.image}
          alt={post.text}
          key={post._id}
          className="photoPageItem"
          onClick={() => handleOpen(post.image)}
        />
      );
    });
  } else {
    photos = <h3>There`s nothing here...</h3>;
  }
  return (
    <div className="photoPage">
      <SideBar />
      <div className="photoPageInner">{photos}</div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div>
            <img src={api + image} alt="modalImg" className="modalImg" />
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default PhotoPage;

PhotoPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};
