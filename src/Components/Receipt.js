import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
function Receipt() {
  const [tracks, setTracks] = useState([]);
  let token = localStorage.getItem("token");
  const getTop = () => {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    let top_tracks = axios.get(
      "https://api.spotify.com/v1/me/top/tracks?limit=10"
    );
    console.log(top_tracks);
    top_tracks.then(setTracks);
    console.log(tracks.data?.items);
  };
  useEffect(() => {
    getTop();
  }, []);
  return (
    <div>
      <div className="receipt">
        <div className="receipt-title">MUSITIFY</div>
        <div className="receipt-topinfo">
          <p>CLIENT NAME: {localStorage.getItem("nickname")}</p>
        </div>
      </div>
    </div>
  );
}

export default Receipt;
