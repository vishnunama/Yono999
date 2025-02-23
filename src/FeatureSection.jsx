import React from "react";
import "./App.css";

function FeatureSection() {
  const features = [
    { icon: "1.png", text: "Cashback" },
    { icon: "2.png", text: "24*7" },
    { icon: "3.png", text: "100%" },
    { icon: "4.png", text: "6 Core+" },
  ];

  return (
    <div className="feature-container">
      <h2 className="feature-title">Top Games On Yono 999</h2>
      <div className="feature-icons">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <img src={feature.icon} className="feature-icon"/>
            <p className="feature-text">{feature.text}</p>
          </div>
        ))}
      </div>
      <p className="feature-subtext">Users Secure & Legal Customer Support Offers</p>
    </div>
  );
}

export default FeatureSection;
