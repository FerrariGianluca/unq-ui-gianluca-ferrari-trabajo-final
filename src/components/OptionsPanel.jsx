import React from "react";
import "../styles/OptionsPanel.css";

const OptionsPanel = ( {options} ) => {

  const handleChoice = (id) => {
    console.log(`Elegiste ${id}`)
  }
  
  return (
    <div className="options-container">
      {options.map((option) => (
        <button
          className="option"
          key={option.id}
          name={option.name}
          onClick={() => handleChoice(option.id)}>
          <option.emoji style={{color: option.color}} size={50} />
        </button>
      ))}
    </div>
  );
};

export default OptionsPanel;