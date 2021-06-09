import React, {useState, useRef} from 'react';
import {useDispatch} from "react-redux";
import {editProfile} from "../../store/actions/userActions";
import "./EditProfile.css";
import {Link} from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";

const EditProfile = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [dayOfBirth, setDayOfBirth] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState("");

  const fileChangeHandler = e => {
    const file = e.target.files[0];
    setImage(file);
  };


  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("gender", gender);
    formData.append("city", city);
    formData.append("status", status);
    formData.append("image", image);
    dispatch(editProfile(formData));
  };

  return (
    <div className="editPage">
      <SideBar/>
      <form className="editForm"
            onSubmit={formSubmit}
      >
        <h2 className="editProfileTitle">Edit your profile</h2>
        <label>First Name:
          <input
            type="text"
            className="field"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          /></label>
        <label>Last Name:
          <input
            type="text"
            className="field"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          /></label>
        <label>Gender:
          <select
            className="field"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option defaultValue={gender}>Not chosen</option>
            <option value="female">female</option>
            <option value="male">male</option>
          </select>
        </label>
        {/*<label>Day of Birth:*/}
        {/*  <input*/}
        {/*    type="text"*/}
        {/*    className="field"*/}
        {/*    placeholder="Last Name"*/}
        {/*    value={lastName}*/}
        {/*    onChange={(e) => setLastName(e.target.value)}*/}
        {/*  /></label>*/}
        <label>City:
          <input
            type="text"
            className="field"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          /></label>
        <label>Status:
          <select
            className="field"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option defaultValue={status}>Not chosen</option>
            <option value="married">Married</option>
            <option value="single">Single</option>
          </select>
        </label>
        <label>Profile Image:
          <input
            type='file'
            ref={inputRef}
            className='field'
            onChange={fileChangeHandler}
          /></label>
        <button
          type="submit"
          className="loginBtn"
        >Edit
        </button>
        <Link to="/user">
          <button
            type="button"
            className="loginBtn"
          >Cancel
          </button>
        </Link>
      </form>
    </div>
  );
};

export default EditProfile;