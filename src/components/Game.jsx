import React, { useState, useEffect } from "react";
import { 
  FaHandRock, 
  FaHandPaper, 
  FaHandScissors, 
  FaHandLizard, 
  FaHandSpock } 
from "react-icons/fa";
import OptionsPanel from "./OptionsPanel";
import "../styles/Game.css";

const options = [
  { id: 0, name: "Piedra", emoji: FaHandRock, color: "#FF8282", victims: [2, 3] },
  { id: 1, name: "Papel", emoji: FaHandPaper, color: "#FFDE5B", victims: [0, 4] },
  { id: 2, name: "Tijera", emoji: FaHandScissors, color: "#E681FF", victims: [1, 3] },
  { id: 3, name: "Lagarto", emoji: FaHandLizard, color: "#8BDF8B", victims: [1, 4] },
  { id: 4, name: "Spock", emoji: FaHandSpock, color: "#81B4FF", victims: [0, 2] },
]

const Game = () => {

  return (
    <div className="container">
      <div className="panel">
        <div className="titulo">Jugador 1</div>
        <OptionsPanel options={options} />
      </div>
      <div className="panel">
        <div className="titulo">Jugador 2</div>
        <OptionsPanel options={options} />
      </div>
    </div>
    
  );
};

export default Game;