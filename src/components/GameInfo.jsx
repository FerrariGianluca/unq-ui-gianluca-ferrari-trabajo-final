import React from "react";
import "../styles/GameInfo.css";

const GameInfo = ( {result, action, showRestartButton, handleRestart, mode} ) => {

  return (
    <div className="game-info">
      { result && <div>{action}</div>}
      {result && 
        (mode === "multiplayer" ? (
          showRestartButton && <button onClick={handleRestart}>Volver a jugar</button>
        ) : (
          <button onClick={handleRestart}>Volver a jugar</button>
        )
      )}
    </div>
  )
}

export default GameInfo;