import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {registerUser} from "../../store/actions/userActions";

const Register = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const register = () => {
    if (email !== "" && password !== "" && displayName !== "") {
      dispatch(registerUser({
        email, password, displayName
      }));
      setDisplayName("");
      setPassword("");
      setEmail("");
    }
  };

  return (
    <div className="loginBlock">
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
        placeholder="Display Name"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
      />
      <button
        type="button"
        className="loginBtn"
        onClick={register}
      >Login</button>
    </div>
  );
};

export default Register;