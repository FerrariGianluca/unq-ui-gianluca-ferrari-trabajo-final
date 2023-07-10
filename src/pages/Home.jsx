import React, { useState } from "react";
import logo from '../img/pptls.png';
import '../styles/Home.css';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/game", { replace: true });
  }

  return (
    <div className="home-container">
      <div className="home-img-container">
        <img src={logo} alt="Logo 'piedra, papel, tijera, lagarto, spock'" />
      </div>
      <div className="home-options-container">
        <button onClick={handleClick} className="home-option">1 JUGADOR</button>
        <button onClick={handleClick} className="home-option">2 JUGADORES</button>
      </div>
    </div>
  )
}

export default Home;