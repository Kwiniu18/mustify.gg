import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

function Demo() {
  const CLIENT_ID = "6fba0c5c588940c8991b7d05ef595b6b";
  const REDIRECT_URI = "http://localhost:3001/";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  const [token, setToken] = useState("");
  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);
  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };
  if (token != "") {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    let user_data = axios.get("https://api.spotify.com/v1/me");
    user_data.then((user_info) => {
      console.log(user_info.data);
    });
  }

  return (
    <div>
      <div className="login-container">
        <div className="login-title">
          <h1 id="main-title">Musitify.gg</h1>
        </div>

        {!token ? (
          <a
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          >
            Login to Spotify
          </a>
        ) : (
          <button onClick={logout}>Logout</button>
        )}
      </div>
      <div className="ext-container">
        <div className="ext-title">You should try:</div>
        <div className="ext-option">
          <p id="ext-option-title">Your Spotify Top 🔝</p>
        </div>
        <div className="ext-option">
          <p id="ext-option-title">Your Music Receipt 🧾</p>
        </div>
        <div className="ext-option">
          <p id="ext-option-title">Soon ⌛</p>
        </div>
        <div className="ext-option">
          <p id="ext-option-title">Soon ⌛</p>
        </div>
      </div>
      <footer>
        <img
          src="https://logos-world.net/wp-content/uploads/2020/09/Spotify-Logo.png"
          className="spotify-logo"
        ></img>
      </footer>
    </div>
  );
}
export default Demo;
