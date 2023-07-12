import React from "react";
import "../styles/Stats.css"

const Stats = ( {total, jugador1, empate, jugador2, mode} ) => {
  return (
    <div className="stats-info">
      <div>Total partidas jugadas: <span className="contador">{total}</span></div>
      <div>Jugador 1: <span className="contador">{jugador1}</span></div>
      <div>Empates: <span className="contador">{empate}</span></div>
      <div>{mode==="singleplayer" ? "Computadora: " : "Jugador 2: "}<span className="contador">{jugador2}</span></div>
    </div>
  )
}

export default Stats;