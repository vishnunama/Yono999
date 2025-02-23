import React from "react";
import "./App.css";
import Game from "./Game";
import FeatureSection from "./FeatureSection";
import DownloadButton from "./DownloadButton";

function Home() {
  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url("H51.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div style={{ background: "#0D6F69", width: "100%", borderTop: "4px solid #d4af37", marginTop: "500px" }}>
        <div className="top-title">Top Games On Yono 999</div>
        <p className="sub-title">
          Play over <span className="highlight">60+</span> Games and Win Cash
        </p>
      </div>
      <div>
        <Game />
        <FeatureSection />
        <DownloadButton />
      </div>
    </div>
  );
}

export default Home;
