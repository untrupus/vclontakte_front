import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/actions/userActions";
import newAccountIcon from "../../assets/newAccountIcon.png";

const Register = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  /** Sends registration data and clear local state */
  const register = () => {
    if (email !== "" && password !== "" && firstName !== "") {
      dispatch(
        registerUser({
          email,
          password,
          firstName,
          lastName,
        })
      );
      setFirstName("");
      setPassword("");
      setEmail("");
      setLastName("");
    }
  };
  return (
    <div className="loginBlock">
      <img src={newAccountIcon} alt="login" className="loginIcon" />
      <h2>Create new account</h2>
      <input
        type="text"
        className="field"
        placeholder="e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        className="field"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        className="field"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        className="field"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <button type="button" className="loginBtn" onClick={register}>
        Register
      </button>
    </div>
  );
};

export default Register;
