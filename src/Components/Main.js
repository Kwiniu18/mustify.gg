import React from "react";

function Main() {

    let token = localStorage.getItem('token')


  const cards = [
    {
      title: "Your Spotify Top",
      img: "https://th.bing.com/th/id/OIP.IU8Qg4dcbXEqRYPEwQ781gAAAA?pid=ImgDet&rs=1",
      desc: "See your mostly played songs in spotify!",
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
                <button className="card-btn">Try</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
