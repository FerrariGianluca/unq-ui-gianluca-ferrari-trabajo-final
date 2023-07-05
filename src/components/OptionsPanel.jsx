import React, { useState } from "react";
import "../styles/OptionsPanel.css";

const OptionsPanel = ( {options, onOptionSelect} ) => {

  const [choice, setChoice] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const handleChoice = (option) => {
    onOptionSelect(option);
    setDisabled(true);
  }
  
  return (
    <div className="options-container">
      {options.map((option) => (
        <button
          className={disabled ? "disabled" : "option"}
          key={option.id}
          name={option.name}
          disabled={disabled}
          onClick={() => handleChoice(option)}>
          <option.emoji style={{color: option.color}} size={50} />
        </button>
      ))}
    </div>
  );
};

export default OptionsPanel;