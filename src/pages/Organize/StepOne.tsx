import React, { useState } from "react";
import "./SCSS/Steps.scss";
import { useDispatch, useSelector } from "react-redux";
import { setStep1Data } from "../../Redux/formSlice";

export const StepOne = () => {
  const dispatch = useDispatch();
  const { step3 } = useSelector((state: any) => state.form);
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const handleButtonSelect = (receivers: string) => {
    // dispatch(setStep3Data({ ...step3, receivers }));
  };
  const handleButtonChange = (typeOfHelp: string) => {
    dispatch(setStep1Data({ typeOfHelp }));
    setActiveButton(typeOfHelp);
  };

  return (
    <div className="steps-generalContainer">
      <h2 className="generalContainer-header">Personal details</h2>
      <div className="personalDetails-data">
        <label className="personalDetails-label" htmlFor="name">
          Name
          <input
            // onChange={handleInputChange}
            // value={inputValue?.address}
            type="text"
            className="personalDetails-input"
            id="name"
          />
        </label>
      </div>
      <div className="personalDetails-data">
        <label className="personalDetails-label">
          Last name
          <input
            // onChange={handleInputChange}
            // value={inputValue?.address}
            type="text"
            className="personalDetails-input"
            id="lastName"
          />
        </label>
      </div>
      <div className="personalDetails-data">
        <label className="personalDetails-label">
          Phone
          <input
            // onChange={handleInputChange}
            // value={inputValue?.address}
            type="text"
            className="personalDetails-input"
            id="lastName"
          />
        </label>
      </div>
      <div className="chooseHelp-container">
        <h3 className="chooseHelp-header">Who are you planning to help?</h3>
        <button
          // onClick={() => handleButtonSelect("children")}
          type="button"
          className={`chooseHelp-button ${
            step3 && step3.receivers === "children" ? "chosen" : ""
          }`}
        >
          children
        </button>
        <button
          // onClick={() => handleButtonSelect("lonely mothers")}
          type="button"
          className={`chooseHelp-button ${
            step3 && step3.receivers === "lonely mothers" ? "chosen" : ""
          }`}
        >
          lonely mothers
        </button>
        <button
          // onClick={() => handleButtonSelect("homeless")}
          type="button"
          className={`chooseHelp-button ${
            step3 && step3.receivers === "homeless" ? "chosen" : ""
          }`}
        >
          homeless
        </button>
        <button
          // onClick={() => handleButtonSelect("the disabled")}
          type="button"
          className={`chooseHelp-button ${
            step3 && step3.receivers === "the disabled" ? "chosen" : ""
          }`}
        >
          the disabled
        </button>
        <button
          // onClick={() => handleButtonSelect("the elderly")}
          type="button"
          className={`chooseHelp-button ${
            step3 && step3.receivers === "the elderly" ? "chosen" : ""
          }`}
        >
          the elderly
        </button>
        <button
          // onClick={() => handleButtonSelect("the elderly")}
          type="button"
          className={`chooseHelp-button${
            step3 && step3.receivers === "the elderly" ? "chosen" : ""
          }`}
        >
          anyone
        </button>
      </div>
    </div>
  );
};

export default StepOne;
