import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
function Main() {
  const [token, setToken] = useState("");
  useEffect(() => {
    const hash = window.location.hash;
    let token = localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];
      console.log(token);
      window.location.hash = "";
      window.localStorage.setItem("token", token);
      localStorage.setItem("token", token);
    }

    setToken(token);
    console.log(token);
  }, []);
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  let user_data = axios.get("https://api.spotify.com/v1/me");
  user_data.then((user_info) => {
    console.log(user_info.data);
  });
  const logout = () => {
    window.localStorage.removeItem("token");
  };
  const cards = [
    {
      title: "Your Spotify Top",
      img: "https://th.bing.com/th/id/OIP.IU8Qg4dcbXEqRYPEwQ781gAAAA?pid=ImgDet&rs=1",
      desc: "See your mostly played songs and artist in spotify!",
      float: "right",
      margin: "30vh",
    },
    {
      title: "Spotify receipt",
      img: "https://64.media.tumblr.com/34b892fc9157ebcfef1ac18e791df059/78f02bde179c89b2-48/s640x960/3907df9143863d56d1014d0f97c9983747caeab3.png",
      desc: "Print your own spotify receipt and share it",
      float: "left",
    },
  ];

  return (
    <div>
      <div className="main-container">
        <div className="main-title">
          <p id="main-title">MUSITIFY.GG</p>
        </div>
        <div className="margin"></div>
        {cards.map((e) => (
          <div className="card" style={{ float: e.float, marginTop: e.margin }}>
            <div className="card-title">
              <p>{e.title}</p>
            </div>
            <div className="card-content">
              <div className="card-img">
                <img src={e.img} width={"100%"}></img>
              </div>
              <div className="card-desc">
                <p>{e.desc}</p>
              </div>
              <div className="btn-container">
                <button className="card-btn" onClick={logout}>
                  Try
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
