import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setStep1Data } from "../../Redux/formSlice";

export const StepOne = () => {
  const dispatch = useDispatch();

  const handleButtonChange = (typeOfHelp: string) => {
    dispatch(setStep1Data({ typeOfHelp }));
  };

  return (
    <div className="application-text_container">
      <h2 className="application-text_header">Mark what you want to donate:</h2>
      <div className="application-point_container">
        <label className="application-point_text" htmlFor="control_reused">
          clothes, which can be reused
          <button
            onClick={() => handleButtonChange("clothes, which can be reused")}
            type="button"
            className="application-point_button"
          />
        </label>
      </div>
      <div className="application-point_container">
        <label className="application-point_text">
          clothes, which cannot be reused
          <button
            onClick={() =>
              handleButtonChange("clothes, which cannot be reused")
            }
            type="button"
            className="application-point_button"
          />
        </label>
      </div>
      <div className="application-point_container">
        <label className="application-point_text">
          toys
          <button
            onClick={() => handleButtonChange("toys")}
            type="button"
            className="application-point_button"
          />
        </label>
      </div>
      <div className="application-point_container">
        <label className="application-point_text">
          books
          <button
            onClick={() => handleButtonChange("books")}
            type="button"
            className="application-point_button"
          />
        </label>
      </div>
      <div className="application-point_container">
        <label className="application-point_text">
          other
          <button
            onClick={() => handleButtonChange("other")}
            type="button"
            className="application-point_button"
          />
        </label>
      </div>
    </div>
  );
};

export default StepOne;
