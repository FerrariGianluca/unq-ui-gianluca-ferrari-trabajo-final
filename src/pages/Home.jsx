import React, { useState } from "react";
import logo from '../img/pptls.png';
import '../styles/Home.css';
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div className="home-container">
      <div className="home-img-container">
        <img src={logo} alt="Logo 'piedra, papel, tijera, lagarto, spock'" />
      </div>
      <div className="home-options-container">
        <Link to="/game/singleplayer" className="home-option">1 JUGADOR</Link>
        <Link to="/game/multiplayer" className="home-option">2 JUGADORES</Link>
      </div>
    </div>
  )
}

export default Home;