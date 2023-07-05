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

  const [choice1, setChoice1] = useState(null);
  const [choice2, setChoice2] = useState(null);
  const [turn, setTurn] = useState(1);
  const [result, setResult] = useState(null);

  const handleOptionSelect = (optionId) => {
    setChoice1(optionId);
    setTurn(2);
  }

  useEffect(() => {
    if (turn===2){
      const random = Math.floor(Math.random() * 5);
      
      setTimeout(() => {
        setChoice2(options[random])
        setTurn(0)
      }, 1500);
    }
  }, [turn]);

  return (
    <>
      <div className="title">Piedra, Papel, Tijera, Lagarto, Spock</div>
      <div className="container">
        <div className="panel">
          <div className="player">Jugador 1</div>
          <OptionsPanel 
            options={options} 
            onOptionSelect={handleOptionSelect}
            isDisabled={false}
            isLeft={true}
          />
        </div>
        <div className="play-container">
          <div className="turn-info">
            { turn === 1 ? 'Es el turno del jugador'
            : turn === 2 ? 'Es el turno de la computadora'
            : 'Fin' }
          </div>
          <div className="board">
            <div className="choice">
              {choice1 && <choice1.emoji style={{color: choice1.color, margin: 'auto', transform: 'scaleX(-1)'}} size={100}/>}
            </div>
            <div className="">VS</div>
            <div className="choice">
              {choice2 && <choice2.emoji style={{color: choice2.color, margin: 'auto'}} size={100}/>}
            </div>
          </div>
        </div>
        <div className="panel">
          <div className="player">Jugador 2</div>
          <OptionsPanel 
            options={options} 
            isDisabled={true}
            isLeft={false} />
        </div>
      </div>
    </>
  );
};

export default Game;