import React, { useState } from "react";
import "../styles/OptionsPanel.css";

const OptionsPanel = ( {options, onOptionSelect, isDisabled, isLeft} ) => {

  const [disabled, setDisabled] = useState(isDisabled);

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
          <option.emoji style={{color: option.color, transform: isLeft ? 'scaleX(-1)' : 'none'}} size={50} />
        </button>
      ))}
    </div>
  );
};

export default OptionsPanel;