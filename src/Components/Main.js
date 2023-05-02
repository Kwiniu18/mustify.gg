import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
function Main() {
  const [token, setToken] = useState("");
  const [top, setTop] = useState([]);
  const navigate = useNavigate();
  const type = () => {
    document.getElementById("main-title").style.display = "none";
    document.getElementById("name-title").style.display = "block";
  };
  useEffect(() => {
    setTimeout(() => type(), 1630);
    const hash = window.location.hash;
    let token = localStorage.getItem("token");
    console.log(token);
    if (localStorage.getItem("token") == null) {
      navigate("/login");
    }
    if (token != hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];
      console.log(token);

      localStorage.setItem("token", token);
    }

    setToken(token);
    console.log(token);
  }, []);
  const getMe = async () => {
    console.log(token);
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    let user_data = axios.get("https://api.spotify.com/v1/me/");
    user_data.then((user_info) => {
      console.log(user_info.data);
      let nickname = user_info.data.display_name;
      localStorage.setItem("nickname", nickname);
      console.log(nickname);
    });
  };

  const getTop = () => {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    let top_artists = axios.get("https://api.spotify.com/v1/me/top/artists");
    top_artists.then((artists_array) => {
      console.log(artists_array.data.items);
      setTop(artists_array.data.items);
    });
  };
  useEffect(() => {
    if (token) {
      getMe();
      getTop();
    }
  }, [token]);
  console.log(top);
  console.log(localStorage.getItem("nickname"));
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  const navigateTop = () => {
    navigate("/spotifyTop");
  };
  const cards = [
    {
      title: "Your Spotify Top",
      img: "https://th.bing.com/th/id/OIP.IU8Qg4dcbXEqRYPEwQ781gAAAA?pid=ImgDet&rs=1",
      desc: "See your mostly played songs and artist in spotify!",
      float: "right",
      margin: "30vh",
      route: navigateTop,
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
          <p id="name-title">HI {localStorage.getItem("nickname")}</p>
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
                <button className="card-btn" onClick={e.route}>
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
