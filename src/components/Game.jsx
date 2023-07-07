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
import optionsJSON from "../options.json"

/*const options = [
  { id: 0, name: "Piedra", emoji: FaHandRock, color: "#FF8282", victims: [2, 3] },
  { id: 1, name: "Papel", emoji: FaHandPaper, color: "#FFDE5B", victims: [0, 4] },
  { id: 2, name: "Tijera", emoji: FaHandScissors, color: "#E681FF", victims: [1, 3] },
  { id: 3, name: "Lagarto", emoji: FaHandLizard, color: "#8BDF8B", victims: [1, 4] },
  { id: 4, name: "Spock", emoji: FaHandSpock, color: "#81B4FF", victims: [0, 2] },
]*/

const Game = () => {
  const [choice1, setChoice1] = useState(null);
  const [choice2, setChoice2] = useState(null);
  const [turn, setTurn] = useState(1);
  const [result, setResult] = useState("");

  const iconMap = {
    FaHandRock,
    FaHandPaper,
    FaHandScissors,
    FaHandLizard,
    FaHandSpock
  };
  
  const options = optionsJSON.map(option => ({
    ...option,
    emoji: iconMap[option.emoji]
  }));

  const handleOptionSelect = (option) => {
    setChoice1(option);
    setTurn(2);
  }

  const getResult = () => {
    if (choice1.victims.some(item => item.id === choice2.id)){//choice1.victims.includes(choice2.id)){
      return (
        <div style={{textAlign: 'center'}}>
          <p>{choice1.name} acción a {choice2.name}</p>
          <p>Gana el jugador</p>
        </div>
      )
    } else if (choice2.victims.includes(choice1.id)){
      return "Gana la computadora"
    } else {
      return "Empate"
    }
  }

  useEffect(() => {
    if(turn===0){
      setResult(getResult())
      console.log(result)
    }
  }, [turn])

  useEffect(() => {
    if (turn===2){
      const randomNumber = Math.floor(Math.random() * 5);
      const randomOption = options.find(option => option.id === randomNumber);

      setTimeout(() => {
        setChoice2(randomOption)
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
            : result }
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