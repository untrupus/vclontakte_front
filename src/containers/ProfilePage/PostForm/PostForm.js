import React, {useRef, useState} from 'react';
import {useDispatch} from "react-redux";
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {addPost} from "../../../store/actions/postActions";
import "./PostForm.css";

const PostForm = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const fileChangeHandler = e => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(e.target.files[0]))
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("text", text);
    formData.append("image", image);
    if (text !== "" || image !== "") {
      dispatch(addPost(formData));
      setText("");
      setImage("");
      setImagePreview(null);
    }
  };

  const removePhoto = () => {
    setImage("");
    setImagePreview(null);
  };

  return (
    <div className="postForm">
      <form className="form" onSubmit={formSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Whats new?"
          className="postField"
        />
        <label htmlFor="upload-photo">
          <PhotoCameraIcon className="cameraIcon"/>
        </label>
        <input
          ref={inputRef}
          onChange={fileChangeHandler}
          type="file"
          accept="image/jpeg, image/png"
          name="photo"
          id="upload-photo"
          className="fileInput"
        />
        <button
          type="submit"
          className="postBtn"
        >Add
        </button>
      </form>
      {imagePreview ?
        <div className="preview">
          <HighlightOffIcon
            className="removePhotoIcon"
            onClick={removePhoto}
          />
          <img
            src={imagePreview}
            alt="preview"
            className="imagePreview"
          />
        </div> : null}
    </div>
  );
}

export default PostForm;