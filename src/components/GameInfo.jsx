import React from "react";
import "../styles/GameInfo.css";

const GameInfo = ( {mode, turn, result} ) => {

  return (
    <div className="game-info">
      { turn === 1 ? (mode === 'singleplayer'? 'Es el turno del Jugador' 
                      : 'Es el turno del Jugador 1')
      : turn === 2 ? (mode === 'singleplayer'? 'Es el turno de la Computadora' 
                      : 'Es el turno del Jugador 2')
      : result }
    </div>
  )
}

export default GameInfo;