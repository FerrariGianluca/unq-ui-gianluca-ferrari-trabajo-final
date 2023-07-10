import React, { useState, useEffect } from "react";
import { 
  FaHandRock, 
  FaHandPaper, 
  FaHandScissors, 
  FaHandLizard, 
  FaHandSpock } 
from "react-icons/fa";
import OptionsPanel from "../components/OptionsPanel";
import "../styles/Game.css";
import optionsJSON from "../data/options.json"

const Game = () => {
  const [choice1, setChoice1] = useState(null);
  const [choice2, setChoice2] = useState(null);
  const [turn, setTurn] = useState(1);
  const [result, setResult] = useState("");
  const [action, setAction] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [total, setTotal] = useState(0);
  const [jugador1, setJugador1] = useState(0);
  const [jugador2, setJugador2] = useState(0);
  const [empate, setEmpate] = useState(0);

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

  //Indica si la opción1 le gana a la opción2
  const beats = (selection1, selection2) => {
    return selection1.victims.some(victim => victim.id === selection2.id)
  }

  //Devuelve la acción que le realiza la opción ganadora a la opción perdedora
  const findAction = (selection1, selection2) => {
    return selection1.victims[selection1.victims.findIndex(a => a.id === selection2.id)].action
  }

  const getResult = () => {
    setTotal(total + 1)
    if (beats(choice1, choice2)){
      setJugador1(jugador1 + 1);
      return "Gana el Jugador 1"
    } else if (beats(choice2, choice1)){
      setJugador2(jugador2 + 1);
      return "Gana el Jugador 2"
    } else {
      setEmpate(empate + 1);
      return "Empate"
    }
  }

  const getAction = () => {
    if (beats(choice1, choice2)){
      return (
        <div style={{textAlign: 'center'}}>
            <span style={{backgroundColor: choice1.color}}>{choice1.name}</span> {findAction(choice1, choice2)} <span style={{backgroundColor: choice2.color}}>{choice2.name}</span>
        </div>
      )
    } else if (beats(choice2, choice1)){
      return (
        <div style={{textAlign: 'center'}}>
          <span style={{backgroundColor: choice2.color}}>{choice2.name}</span> {findAction(choice2, choice1)} <span style={{backgroundColor: choice1.color}}>{choice1.name}</span>
        </div>
      )
    } else {
      return ""
    }
  }

  const handleRestart = () => {
    setChoice1(null);
    setChoice2(null);
    setTurn(1);
    setResult("");
    setAction("");
  }

  useEffect(() => {
    if(turn===0 && !result){
      setResult(getResult());
      setAction(getAction());
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
      <div className="title">Piedra - Papel - Tijera - Lagarto - Spock</div>
      <div className="container">
        <div className="panel">
          <div className="player">Jugador 1</div>
          <OptionsPanel 
            options={options} 
            onOptionSelect={handleOptionSelect}
            isDisabled={turn !== 1}
            isLeft={true}
            turn={turn}
          />
        </div>
        <div className="game-container">
          <div className="game-info">
            { turn === 1 ? 'Es el turno del Jugador 1'
            : turn === 2 ? 'Es el turno del Jugador 2'
            : result }
          </div>
          <div className="board">
            <div className="choice">
              {choice1 && <choice1.emoji style={{color: choice1.color, margin: 'auto', transform: 'scaleX(-1)'}} size={100}/>}
            </div>
            <div className="vs">VS</div>
            <div className="choice">
              {choice2 && <choice2.emoji style={{color: choice2.color, margin: 'auto'}} size={100}/>}
            </div>
          </div>
          <div className="game-info">
            { result && <div>{action}</div>}
            { result && <button onClick={handleRestart}>Volver a jugar</button>}
          </div>
          <div className="stats">
            <div>Total partidas jugadas: <span className="contador">{total}</span></div>
            <div>Jugador 1: <span className="contador">{jugador1}</span></div>
            <div>Empates: <span className="contador">{empate}</span></div>
            <div>Jugador 2: <span className="contador">{jugador2}</span></div>
          </div>
        </div>
        <div className="panel">
          <div className="player">Jugador 2</div>
          <OptionsPanel 
            options={options} 
            isDisabled={true}
            isLeft={false}
            turn={turn} />
        </div>
      </div>
    </>
  );
};

export default Game;