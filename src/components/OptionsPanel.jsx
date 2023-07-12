import React, { useState } from "react";
import { useEffect } from "react";
import "../styles/OptionsPanel.css";

const OptionsPanel = ( {options, onOptionSelect, isDisabled, isLeft} ) => {
  const handleChoice = (option) => {
    onOptionSelect(option);
  }

  return (
    <div className="options-container">
      {options.map((option) => (
        <button
          className={isDisabled ? "disabled" : "option"}
          key={option.id}
          name={option.name}
          disabled={isDisabled}
          onClick={() => handleChoice(option)}>
          <option.emoji style={{color: option.color, transform: isLeft ? 'scaleX(-1)' : 'none'}} size={50} />
        </button>
      ))}
    </div>
  );
};

export default OptionsPanel;