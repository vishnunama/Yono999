import React from "react";
import "./App.css";

function DownloadButton() {
  return (
    <div className="download-container">
      <div className="bonus-banner">Get 100 Bonus</div>
      <a href="/999Yono.apk" download="999Yono.apk">
        <img className="download-img" src="bdownload.png" alt="Download APK" />
      </a>
    </div>
  );
}

export default DownloadButton;
