import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createGroup } from "../../store/actions/groupActions";
import SideBar from "../../components/SideBar/SideBar";
import communityIcon from "../../assets/communityIcon.png";
import "./CreateGroupPage.css";

const CreateGroupPage = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  /** For some reason upload file doesn't work without this function */
  const fileChangeHandler = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };
  /** Remove image from state and preview */
  const removeImg = () => {
    setImage("");
    setImagePreview(null);
  };
  /** Sends Group data */
  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", image);
    if (name !== "" && image !== "") {
      dispatch(createGroup(formData));
      setName("");
      setDescription("");
      setImage("");
      setImagePreview(null);
    }
  };
  return (
    <div className="createGroup">
      <SideBar />
      <div className="createGroupPage">
        <img src={communityIcon} alt="create icon" className="createIcon" />
        <h3>Create your own group</h3>
        <form className="createGroupForm" onSubmit={formSubmit}>
          <input
            type="text"
            className="createGroupField"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="createGroupField"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label htmlFor="upload" className="inputLabel">
            <span>Add Photo</span>
          </label>
          <input
            ref={inputRef}
            onChange={fileChangeHandler}
            type="file"
            accept="image/jpeg, image/png"
            name="photo"
            id="upload"
            className="fileInput"
          />
          {imagePreview ? (
            <>
              <img
                src={imagePreview}
                alt="preview"
                className="groupImagePreview"
              />
              <button onClick={removeImg}>Remove</button>
            </>
          ) : null}
          <div className="buttonBlock">
            <button className="createGroupBtn">
              <Link to="/mygroups"> Cancel </Link>
            </button>
            <button type="submit" className="createGroupBtn">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateGroupPage;
