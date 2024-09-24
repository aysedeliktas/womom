import React from 'react'
import "./ProgressBarStyle.css"


const ProgressBar = ({ value }) => {
    // Calculate the color transition based on the value
    const red = Math.max(255 - (value * 2.55), 0);
    const green = Math.min(value * 2.55, 255);
    
    const progressColor = `rgb(${red}, ${green}, 0)`; // Transition from red to green
  
    return (
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{
            width: `${value}%`,
            backgroundColor: progressColor,
          }}
        ></div>
      </div>
    );
  };

export default ProgressBar