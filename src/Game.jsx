import React from "react";
import "./App.css";

function Game() {
  const games = [
    { img: "01Rummy.png", name: "Rummy" },
    { img: "02Teenpatti.png", name: "Teenpatti" },
    { img: "03Texas-Poker.png", name: "Texas Poker" },
    { img: "04Domino.png", name: "Domino" },
    { img: "06Lodo.png", name: "LUDO" },
    { img: "07Dragon-&-Tiger.png", name: "Dragon & Tiger" },
    { img: "08Ander-Bahar.png", name: "Ander Bahar" },
    { img: "09-up-down.png", name: "7 Up Down" },
  ];

  return (
    <div  className="game-container">
      <div className="game-grid">
        {games.map((game, index) => (
          <div key={index} className="game-card">
            <img src={game.img} alt={game.name} className="game-image" />
            {/* <p className="game-title">{game.name}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Game;
