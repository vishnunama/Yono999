import React from "react";
import "./App.css";

function Header() {
  return (
    <div className="header-container">
        <div style={{display:"flex",alignItems:"center"}}>
      <img src="logo.png" alt="Jaiho 777 Logo" className="header-logo" />
      <div className="header-text">
        <div className="header-title">Yono 999</div>
        <p className="header-subtitle">Play over <span className="highlight">60+</span> Games and Win Cash</p>
      </div>
      </div>
      <img src="100.png" alt="100% Secured" className="header-badge" />
    </div>
  );
}

export default Header;
