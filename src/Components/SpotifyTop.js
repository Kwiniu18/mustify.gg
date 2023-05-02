import axios from "axios";
import React, { useEffect, useState } from "react";
function SpotifyTop() {
  const [artists, setArtists] = useState([]);
  const [top1, setTop1] = useState([]);
  const [top2, setTop2] = useState([]);
  const [top3, setTop3] = useState([]);
  let token = localStorage.getItem("token");
  const setTopArtists = (artists_array) => {
    console.log(artists_array.data.items);
    setArtists(artists_array.data.items);
    setTop1(artists_array.data.items[0]);
    setTop2(artists_array.data.items[1]);
    setTop3(artists_array.data.items[2]);
  };

  const getTop = () => {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    let top_artists = axios.get("https://api.spotify.com/v1/me/top/artists");
    top_artists.then(setTopArtists);
  };
  useEffect(() => {
    if (token) {
      getTop();
    }
  }, [token]);

  // console.log(top1.images[1].url);
  return (
    <div className="main-container">
      <div className="top-title">
        <h1 className="top-h1">Your Spotify Top</h1>
      </div>
      <div className="top-nav">
        <div className="top-nav-btn">Artist</div>
        <div className="top-nav-btn">Music</div>
        <div className="top-nav-btn">Genre</div>
      </div>
      <div className="top-artists">
        {artists
          .filter((e, i) => i >= 0)
          .map((e) => (
            <div className="artist">
              <img src={e.images[1].url}></img>
            </div>
          ))}
      </div>
    </div>
  );
}

export default SpotifyTop;
