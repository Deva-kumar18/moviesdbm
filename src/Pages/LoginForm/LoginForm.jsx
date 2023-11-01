import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import Visibility from "@mui/icons-material/Visibility";
import Invisibility from "@mui/icons-material/VisibilityOff";
import Video from "../../Assets/video.png";
import axios from "axios";
import { toast } from "react-toastify";


const LoginForm = () => {
  const [inputType, setInputType] = useState("password");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [userIdError, setUserIdError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const sucessToast = () => {
    toast.success("Login success", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId === "" || password === "") {
      if (userId === "") {
        setUserIdError("Please enter the user ID");
      } else {
        setUserIdError("");
      }
      if (password === "") {
        setPasswordError("Please enter the password");
      } else {
        setPasswordError("");
      }
    } else {
      console.log("Form data submitted:", userId, password);
      navigate("/");

      sucessToast();
    }
  };

  return (
    <div>
       
      <form className="login-form" onSubmit={handleSubmit}>
        <img className="u-icon" src={Video} />
        <div className="input-container">
          <div className="input-field">
            <label className="input-label">Username</label>
            <input
              className="user-input"
              type="text"
              placeholder="Username"
              onChange={(e) => {
                setUserId(e.target.value);
                setUserIdError("");
              }}
            />
            {userIdError && <div className="validation">{userIdError}</div>}
          </div>
          <div className="input-field">
            <label className="input-label">Password</label>
            <input
              className="pass-input"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError("");
              }}
              type={inputType}
            />
            {passwordError && <div className="validation">{passwordError}</div>}
            {inputType === "password" ? (
              <div
                className="visibility-ico"
                onClick={() => setInputType("input")}
              >
                <Invisibility className="visi" />
              </div>
            ) : (
              <div
                className="visibility-ico"
                onClick={() => setInputType("password")}
              >
                <Visibility className="visi" />
              </div>
            )}
          </div>
          <div className="forgot-p">
            <p className="f-password">forgot password</p>
            <button className="login-btn" type="submit" >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
