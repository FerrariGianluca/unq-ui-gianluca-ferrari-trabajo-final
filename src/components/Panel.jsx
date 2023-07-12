import React, { useState, useEffect } from "react";
import OptionsPanel from "./OptionsPanel";
import "../styles/Panel.css";

const Panel = ({ mode, turn, options, handleOptionSelect, jugador }) => {

  const handlePlayer = () => {
    if (mode==="singleplayer"){
      return jugador===1 ? "Jugador" : "Computadora"
    } else {
      return jugador===1 ? "Jugador 1" : "Jugador 2"
    }
  }

  const handleDisabled = () => {
    return jugador === 1 ? (turn !== 1) 
                         : (mode!=="multiplayer" || turn!==2)
  }

  return (
    <div className="panel">
      <div className="player">{handlePlayer()}</div>
      <OptionsPanel 
        options={options} 
        onOptionSelect={handleOptionSelect}
        isDisabled={handleDisabled()}
        isLeft={true}
        turn={turn}
      />
    </div>
  )
}

export default Panel;