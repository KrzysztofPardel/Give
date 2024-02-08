import React from "react";

export const StepOne = () => {
  return (
    <div className="application-text_container">
      <h2 className="application-text_header">Mark what you want to donate:</h2>
      <div className="application-point_container">
        <label className="application-point_text" htmlFor="control_reused">
          clothes, which can be reused
          <button type="button" className="application-point_button" />
        </label>
      </div>
      <div className="application-point_container">
        <label className="application-point_text">
          clothes, which cannot be reused
          <button type="button" className="application-point_button" />
        </label>
      </div>
      <div className="application-point_container">
        <label className="application-point_text">
          toys
          <button type="button" className="application-point_button" />
        </label>
      </div>
      <div className="application-point_container">
        <label className="application-point_text">
          books
          <button type="button" className="application-point_button" />
        </label>
      </div>
      <div className="application-point_container">
        <label className="application-point_text">
          other
          <button type="button" className="application-point_button" />
        </label>
      </div>
    </div>
  );
};

export default StepOne;
