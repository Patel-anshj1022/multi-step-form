import React from "react";

const ProgressBar = ({ currentStep }) => {
  return (
    <div className="progress-bar">
      {[1, 2, 3].map((s) => (
        <div key={s} className={`circle ${currentStep >= s ? "active" : ""}`}>
          {s}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
