import React from "react";

export const StepTwo = () => {
  return (
    <div className="application-text_container">
      <h2 className="application-text_header">
        Choose the amount of 60 liter bags wish to donate:
      </h2>
      <div className="application-point_container">
        <p className="application-point_text_left">I want to donate</p>
        <label className="application-point_text" htmlFor="control_reused">
          x 60 liter bags.
          <input type="number" required className="application-number_bags" />
        </label>
      </div>
    </div>
  );
};

export default StepTwo;
