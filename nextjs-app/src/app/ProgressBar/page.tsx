"use client";
import React, { useState } from "react";
import "./progressbar.css";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const increment = () => {
    console.log("Increment called =", progress);
    setProgress((prev) => (prev < 100 ? prev + 10 : 100));
  };

  const decrement = () => {
    console.log("Decrement called =", progress);
    setProgress((prev) => (prev > 0 ? prev - 10 : 0));
  };

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}>
        {progress}%
      </div>
      <div className="buttons grid grid-cols-2 gap-2">
        <button onClick={increment}>Increase</button>
        <button onClick={decrement}>Decrease</button>
      </div>
    </div>
  );
};

export default ProgressBar;
