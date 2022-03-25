import React from "react";
import "./ProgressBars.css";
const ProgressBars = () => {
  return (
    <div className="skillsbox">
      <div className="skill">HTML5</div>
      <div className="progressbar">
        <div className="progressBarFill">
          <label>60%</label>
        </div>
      </div>
    </div>
  );
};

export default ProgressBars;
