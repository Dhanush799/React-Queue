// FinalViewComponent.js

import React from 'react';
import './FinalViewComponent.css'; // Import the corresponding CSS file

const FinalViewComponent = ({ finalViewData }) => {
  return (
    <div className="final-view-container">
      <div className="final-view-box">
        <h2>Final View Component</h2>
        <ul>
          {finalViewData.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FinalViewComponent;
