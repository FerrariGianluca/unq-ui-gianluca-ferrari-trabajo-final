import React, { useState } from "react";
import { useEffect } from "react";
import logo from '../img/pptls.png';
import '../styles/Home.css';

const Home = () => {

  return (
    <div className="container">
      <div className="img-container">
        <img src={logo} alt="Logo 'piedra, papel, tijera, lagarto, spock'" />
      </div>
      <div className="options-container">
        <button className="option">1 JUGADOR</button>
        <button className="option">2 JUGADORES</button>
      </div>
    </div>
  )
}

export default Home;