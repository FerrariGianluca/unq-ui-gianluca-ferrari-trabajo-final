import React, { useEffect, useState } from "react";
import "../styles/Board.css";
import { FaQuestion } from "react-icons/fa";

const Board = ( {mode, choice1, choice2} ) => {
  const [icon1, setIcon1] = useState(null);
  const [icon2, setIcon2] = useState(null);

  useEffect(() => {
    if (choice1) {
      setIcon1(<FaQuestion size={100}/>)
    }
    if (choice2) {
      setIcon2(<FaQuestion size={100}/>)
      setTimeout(() => {
        setIcon1(<choice1.emoji style={{color: choice1.color, margin: 'auto', transform: 'scaleX(-1)'}} size={100}/>)
      }, 1500);
      setTimeout(() => {
        setIcon2(<choice2.emoji style={{color: choice2.color, margin: 'auto'}} size={100}/>)
      }, 1500);
    }
  }, [choice1, choice2])

  return (
    <div className="board">
      <div className="choice">
        {choice1 && (mode==="singleplayer" ? (
          <choice1.emoji style={{color: choice1.color, margin: 'auto', transform: 'scaleX(-1)'}} size={100}/>
        ) : (
          icon1
        ))}
      </div>
      <div className="vs">VS</div>
      <div className="choice">
        {choice2 && (mode==="singleplayer" ? (
          <choice2.emoji style={{color: choice2.color, margin: 'auto'}} size={100}/>
        ) : (
          icon2
        ))}
      </div>
    </div>
  )
}

export default Board;