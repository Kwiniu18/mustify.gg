import React, { useEffect, useState } from "react";
import axios from "axios";

function Login() {
  const CLIENT_ID = "6fba0c5c588940c8991b7d05ef595b6b";
  const REDIRECT_URI = "http://localhost:3001/main";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  const SCOPE =
    "user-read-private user-read-email playlist-read-private user-top-read";
  const [token, setToken] = useState("");

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };
  // if (token != null) {
  //   axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  //   let user_data = axios.get("https://api.spotify.com/v1/me");
  //   user_data.then((user_info) => {
  //     console.log(user_info.data);
  //   });
  // }
  return (
    <div className="lp-container">
      <div className="lp-title">
        <p id="lp-title">MUSITIFY.GG</p>
      </div>
      <a
        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`}
      >
        <div className="lp-button">
          <div className="lp-login-btn">
            <a id="lp-button-text">LOGIN</a>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Login;
