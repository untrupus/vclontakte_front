import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProfile } from "../../store/actions/userActions";
import DatePicker from "react-date-picker";
import userIcon from "../../assets/user.png";
import { Link } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
import "react-datepicker/dist/react-datepicker.css";
import "./EditProfile.css";

const EditProfile = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user.user);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [gender, setGender] = useState(user.gender);
  const [city, setCity] = useState(user.city);
  const [relationships, setRelationships] = useState(user.relationships);
  const [image, setImage] = useState(user.image);
  const [birthDate, setBirthDate] = useState(new Date(user.birthDate));
  /** The same strange problem as in PostForm */
  const fileChangeHandler = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };
  /** Sending the edited profile */
  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("gender", gender);
    formData.append("city", city);
    formData.append("relationships", relationships);
    formData.append("image", image);
    formData.append("birthDate", birthDate);
    dispatch(editProfile(formData));
  };
  return (
    <div className="editPage">
      <SideBar />
      <form className="editForm" onSubmit={formSubmit}>
        <img src={userIcon} alt="user.png" className="editUserImg" />
        <h2 className="editProfileTitle">Edit your profile</h2>
        <input
          type="text"
          className="editField"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          className="editField"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <select
          className="editField select"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value={""}>none</option>
          <option value="female">female</option>
          <option value="male">male</option>
        </select>
        <div className="birthday">
          <h4>Date of Birth</h4>
          <DatePicker onChange={setBirthDate} value={birthDate} />
        </div>
        <input
          type="text"
          className="editField"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <select
          className="editField select"
          value={relationships}
          onChange={(e) => setRelationships(e.target.value)}
        >
          <option defaultValue={relationships}>Relationships</option>
          <option value="married">Married</option>
          <option value="single">Single</option>
        </select>
        <label htmlFor="edit-img" className="inputLabel">
          Profile Image
        </label>
        <input
          type="file"
          ref={inputRef}
          id="edit-img"
          className="invisibleField"
          onChange={fileChangeHandler}
        />
        <div className="editButtons">
          <button type="submit" className="editButton">
            Edit
          </button>
          <button type="button" className="editButton">
            <Link to={"/user/" + user._id}>Cancel</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
