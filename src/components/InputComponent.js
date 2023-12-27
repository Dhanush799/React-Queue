// InputComponent.js

import React from 'react';
import './InputComponent.css'; // Import the corresponding CSS file

const InputComponent = ({ inputText, setInputText, handleAddText }) => {
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box" 
        placeholder="Enter text..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className="add-button" onClick={handleAddText}>
        Add
      </button>
    </div>
  );
}

export default InputComponent;
