import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/actions/userActions";
import { Link } from "react-router-dom";
import loginIcon from "../../assets/loginIcon.png";
import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = () => {
    if (email !== "" && password !== "") {
      dispatch(
        loginUser({
          email,
          password,
        })
      );
      setEmail("");
      setPassword("");
    }
  };
  return (
    <div className="loginBlock">
      <img src={loginIcon} alt="login" className="loginIcon" />
      <h2>Login</h2>
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
      <button type="button" className="loginBtn" onClick={login}>
        Login
      </button>
      <Link className="link" to="/register">
        Or register...
      </Link>
    </div>
  );
};

export default Login;
