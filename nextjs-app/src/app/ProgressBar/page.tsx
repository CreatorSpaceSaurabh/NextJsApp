"use client";
import React, { useState } from "react";
import "./progressbar.css";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const increment = () => {
    setProgress(() => {
      if (progress < 100) {
        return progress + 10;
      }
    });
  };

  const decrement = () => {
    setProgress(() => {
      if (progress > 0) {
        return progress - 10;
      }
    });
  };

  return (
    <div>
      <div className="progress-bar" style={{ width: `${progress}%;` }}></div>
      <div className="row">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default ProgressBar;
