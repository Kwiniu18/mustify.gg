import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function SpotifyTop() {
  const [artists, setArtists] = useState([]);
  const top1 = artists[0];
  const top2 = artists[1];
  const top3 = artists[2];
  const navigate = useNavigate();
  let token = localStorage.getItem("token");

  const handleImageError = (event) => {
    event.target.src =
      "https://th.bing.com/th/id/R.c02b44483de0a820a686174d74230407?rik=xig4uooDAyDuEQ&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_28937.png&ehk=%2bJ7q8pCv81VXn2l3wo3Ft9BoOoT2gH767%2b7Qz%2f2gCkw%3d&risl=&pid=ImgRaw&r=0";
  };

  const setTopArtists = (artists_array) => {
    console.log(artists_array.data.items);
    setArtists(artists_array.data.items);
  };

  const getTop = () => {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    let top_artists = axios.get(
      "https://api.spotify.com/v1/me/top/artists?limit=30"
    );
    top_artists.then(setTopArtists);
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
      {artists.length >= 3 && (
        <div className="podium">
          <div className="artists-podium">
            <div className="top">
              <img src={top1.images[1].url} alt={top1.name} />
              <div className="top-name">{"1. " + top1.name}</div>
            </div>
            <div className="top">
              <img
                src={
                  top2.images[1].url
                }
                alt={top2.name}
              />
              <div className="top-name">{"2. " + top2.name}</div>
            </div>
            <div className="top">
              <img src={top3.images[1].url} alt={top3.name} />
              <div className="top-name">{"3. " + top3.name}</div>
            </div>
          </div>
        </div>
      )}
      {artists.length > 3 && (
        <div className="top-artists">
          {artists
            .filter((e, i) => i >= 3)
            .map((e, i) => (
              <div className="artist">
                <img src={e.images[1].url} className="artist-avatar"></img>
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
