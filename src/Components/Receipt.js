import React, { useEffect, useState } from "react";
import axios from "axios";
import JsBarcode from "jsbarcode";

function Receipt() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const hour = currentDate.getHours();
  const minute = currentDate.getMinutes();
  const date = day + "/" + month + "/" + year;
  const time = hour + ":" + minute;
  const [tracks, setTracks] = useState([]);
  const token = localStorage.getItem("token");
  const nickname = localStorage.getItem("nickname");

  const generateBarcode = () => {
    const barcodeValue = "MUSITIFY.GG"; // Adres, do którego ma przenosić kod kreskowy
    const barcodeElement = document.getElementById("barcode");
    JsBarcode(barcodeElement, barcodeValue, {
      format: "CODE128",
      background: "none",
      width: 1,
      height: 80,
      marginLeft: 45,
    });
  };

  const getTop = () => {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    axios
      .get("https://api.spotify.com/v1/me/top/tracks?limit=15")
      .then((response) => {
        setTracks(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getTop();
    generateBarcode();
  }, []);

  return (
    <div>
      <div className="receipt">
        <div className="receipt-title">MUSITIFY</div>
        <div className="receipt-topinfo">
          <p>CLIENT NAME: {nickname}</p>
        </div>
        <div className="receipt-total">===========================</div>
        <div className="receipt-songs">
          {tracks.map((e) => (
            <div className="receipt-song" key={e.id}>
              <div className="receipt-song-name">{e.name}</div>
              {e.duration_ms > 0 && (
                <div className="receipt-song-dur">
                  {Math.floor(e.duration_ms / 60000)}:
                  {((e.duration_ms % 60000) / 1000).toFixed(0).padStart(2, "0")}
                </div>
              )}
            </div>
          ))}
          <div className="receipt-total">===========================</div>
          <div className="receipt-date">{date + " " + time}</div>
          <div className="receipt-code">
            <svg id="barcode" fill="none"></svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Receipt;
