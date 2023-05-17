import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function SpotifyTop() {
  const [tracks, setTracks] = useState([]);
  const top1 = tracks[0];
  const top2 = tracks[1];
  const top3 = tracks[2];
  const navigate = useNavigate();
  let token = localStorage.getItem("token");

  const setTopTracks = (tracks_array) => {
    console.log(tracks_array.data.items);
    setTracks(tracks_array.data.items);
  };

  const getTop = () => {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    let top_tracks = axios.get(
      "https://api.spotify.com/v1/me/top/tracks?limit=30"
    );
    console.log(top_tracks);
    top_tracks.then(setTopTracks);
  };
  useEffect(() => {
    if (token) {
      getTop();
    }
  }, [token]);

  return (
    <div className="main-container">
      <div className="top-title">
        <h1 className="top-h1">Your Spotify Top</h1>
      </div>
      <div className="top-nav">
        <div
          className="top-nav-btn"
          onClick={() => {
            navigate("/artists");
          }}
        >
          Artist
        </div>
        <div
          className="top-nav-btn"
          onClick={() => {
            navigate("/music");
          }}
        >
          Music
        </div>
        <div
          className="top-nav-btn"
          onClick={() => {
            navigate("/genre");
          }}
        >
          Genre
        </div>
      </div>
      {tracks.length >= 3 && (
        <div className="podium">
          <div className="tracks-podium">
            <div className="top">
              <img
                src={
                  top1.album?.images[1]?.url ||
                  "https://th.bing.com/th/id/R.c02b44483de0a820a686174d74230407?rik=xig4uooDAyDuEQ&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_28937.png&ehk=%2bJ7q8pCv81VXn2l3wo3Ft9BoOoT2gH767%2b7Qz%2f2gCkw%3d&risl=&pid=ImgRaw&r=0"
                }
                alt={top1.name}
              />
              <div className="top-name">
                {top1.name != "" ? "1. " + top1.name : "1. not from spotify"}
              </div>
            </div>
            <div className="top">
              <img
                src={
                  top2.album?.images[1]?.url ||
                  "https://th.bing.com/th/id/R.c02b44483de0a820a686174d74230407?rik=xig4uooDAyDuEQ&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_28937.png&ehk=%2bJ7q8pCv81VXn2l3wo3Ft9BoOoT2gH767%2b7Qz%2f2gCkw%3d&risl=&pid=ImgRaw&r=0"
                }
                alt={top2.name}
                width={top2.album?.images[1]?.url ? "" : "300px"}
              />
              <div className="top-name">
                {top2.name != "" ? "2. " + top2.name : "2. not from spotify"}
              </div>
            </div>
            <div className="top">
              <img
                src={
                  top3.album?.images[1]?.url ||
                  "https://th.bing.com/th/id/R.c02b44483de0a820a686174d74230407?rik=xig4uooDAyDuEQ&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_28937.png&ehk=%2bJ7q8pCv81VXn2l3wo3Ft9BoOoT2gH767%2b7Qz%2f2gCkw%3d&risl=&pid=ImgRaw&r=0"
                }
                alt={top3.name}
              />
              <div className="top-name">
                {top3.name != "" ? "3. " + top3.name : "3. not from spotify"}
              </div>
            </div>
          </div>
        </div>
      )}
      {tracks.length > 3 && (
        <div className="top-artists">
          {tracks
            .filter((e, i) => i >= 3)
            .map((e, i) => (
              <div className="artist">
                <img
                  src={
                    e.album.images[1].url ||
                    "https://th.bing.com/th/id/R.c02b44483de0a820a686174d74230407?rik=xig4uooDAyDuEQ&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_28937.png&ehk=%2bJ7q8pCv81VXn2l3wo3Ft9BoOoT2gH767%2b7Qz%2f2gCkw%3d&risl=&pid=ImgRaw&r=0"
                  }
                  className="artist-avatar"
                ></img>
                <div className="artist-name">{i + 4 + ". " + e.name}</div>
              </div>
            ))}
        </div>
      )}
      <div className="top-footer"></div>
    </div>
  );
}

export default SpotifyTop;
