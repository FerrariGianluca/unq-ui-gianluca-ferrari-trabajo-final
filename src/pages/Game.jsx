import React, { useState, useEffect } from "react";
import { FaHandRock, FaHandPaper, FaHandScissors, FaHandLizard, FaHandSpock } from "react-icons/fa";
import optionsJSON from "../data/options.json";
import { useParams, Link } from "react-router-dom";
import Panel from "../components/Panel";
import GameResult from "../components/GameResult";
import Board from "../components/Board";
import GameInfo from "../components/GameInfo";
import Stats from "../components/Stats"
import "../styles/Game.css";

const Game = () => {
  const [choice1, setChoice1] = useState(null);
  const [choice2, setChoice2] = useState(null);
  const [turn, setTurn] = useState(1);
  const [result, setResult] = useState("");
  const [action, setAction] = useState("");
  const [total, setTotal] = useState(0);
  const [jugador1, setJugador1] = useState(0);
  const [jugador2, setJugador2] = useState(0);
  const [empate, setEmpate] = useState(0);
  const { mode } = useParams();

  const [showRestartButton, setShowRestartButton] = useState(false);

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
    if (mode === "multiplayer") {
      if (turn === 1) {
        setChoice1(option);
        setTurn(2);
      } else {
        setChoice2(option)
        setTurn(0)
      }
    } else {
      setChoice1(option);
      setTurn(2);
    }
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
      return mode === "singleplayer"? "Gana el Jugador" : "Gana el Jugador 1";
    } else if (beats(choice2, choice1)){
      setJugador2(jugador2 + 1);
      return mode === "singleplayer"? "Gana la Computadora" : "Gana el Jugador 2";
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
    if (result && choice2) {
      const timer = setTimeout(() => {
        setShowRestartButton(true);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      setShowRestartButton(false);
    }
  }, [result, choice2])

  useEffect(() => {
    if(turn===0 && !result && mode==="multiplayer"){
      setResult("Cargando resultado...")
      setTimeout(() => {
        setResult(getResult());
        setAction(getAction());
      }, 1500);
    }
    if(turn===0 && !result && mode==="singleplayer"){
      setResult(getResult());
      setAction(getAction());
    }
  }, [turn])

  useEffect(() => {
    if (turn===2 && mode==="singleplayer"){
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
        <Panel 
          mode={mode} 
          turn={turn} 
          options={options} 
          handleOptionSelect={handleOptionSelect}
          jugador={1}  
        />
        <div className="game-container">
          <GameResult
            mode={mode} 
            turn={turn} 
            result={result} 
          />
          <Board 
            mode={mode} 
            choice1={choice1} 
            choice2={choice2} 
          />
          <GameInfo 
            result={result} 
            action={action}
            showRestartButton={showRestartButton}
            handleRestart={handleRestart}
            mode={mode}
          />
          <div className="stats">
            <Stats 
              total={total}
              jugador1={jugador1}
              empate={empate}
              jugador2={jugador2}
            />
            <Link to="/home" className="back">Volver al inicio</Link>
          </div>
        </div>
        <Panel 
          mode={mode} 
          turn={turn} 
          options={options} 
          handleOptionSelect={handleOptionSelect}
          jugador={2}/>
      </div>
    </>
  );
};

export default Game;