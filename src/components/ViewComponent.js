// ViewComponent.js

import React from 'react';
import './ViewComponent.css'; // Import the corresponding CSS file

const ViewComponent = ({ queue }) => {
  return (
    <div className="view-container">
      <div className="view-box">
        <h2>View Component</h2>
        <ul>
          {queue.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul> 
      </div>
    </div>
  );
}

export default ViewComponent;
