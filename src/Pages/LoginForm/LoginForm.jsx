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
  const [requestToken, setRequestToken] = useState(null);
  const apiKey = "d9ba7d91e188686e1b7f2149a52ff6ca";

  useEffect(() => {
    const apiUrl = `https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`;

    const getNewToken = async () => {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWJhN2Q5MWUxODg2ODZlMWI3ZjIxNDlhNTJmZjZjYSIsInN1YiI6IjY1NDA4ZTRhNmNhOWEwMDBlYmVlMzNiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HOvZ4Mt87XiIUrtxnNUaD3bNn0ROFXMl6WeWoS-PxSc",
          },
        });

        setRequestToken(response.data.request_token);
        console.log("Request Token:", requestToken);
      } catch (error) {
        console.error(error);
      }
    };

    getNewToken();
  }, []);

  const sucessToast = () => {
    toast.success("Login success", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const getRequestToken = () => {
    axios
      .get("https://api.themoviedb.org/3/authentication/guest_session/new", {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWJhN2Q5MWUxODg2ODZlMWI3ZjIxNDlhNTJmZjZjYSIsInN1YiI6IjY1NDA4ZTRhNmNhOWEwMDBlYmVlMzNiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HOvZ4Mt87XiIUrtxnNUaD3bNn0ROFXMl6WeWoS-PxSc",
        },
      })
      .then((res) => {
        console.log(res.data);
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
      localStorage.setItem("Request_token", requestToken);
      const url = `https://api.themoviedb.org/3/authentication/token/validate_with_login`;
      axios
        .post(
          url,
          { username: userId, password, request_token: requestToken },
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWJhN2Q5MWUxODg2ODZlMWI3ZjIxNDlhNTJmZjZjYSIsInN1YiI6IjY1NDA4ZTRhNmNhOWEwMDBlYmVlMzNiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HOvZ4Mt87XiIUrtxnNUaD3bNn0ROFXMl6WeWoS-PxSc",
              accept: "application/json",
              "content-type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          navigate("/");
          sucessToast();
        })
        .catch((error) => {
          console.error(error);
        });
      console.log("Form data submitted:", userId, password);
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
            <button className="login-btn" type="submit">
              Login
            </button>
            <button onClick={getRequestToken}>Guest</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
