import React, { useState, ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStep1Data } from "../../Redux/organizeSlice";
import { Step1 } from "../../Redux/organizeSlice";
import { RootState } from "../../Redux/store";

export const StepOne = () => {
  const dispatch = useDispatch();
  const step1 = useSelector(
    (state: RootState) => state.organize.step1
  ) as Step1;

  const [activeButton, setActiveButton] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<Step1>(() => ({
    name: step1?.name || "",
    lastName: step1?.lastName || "",
    phoneNumber: step1?.phoneNumber || "",
    kindofHelp: step1?.kindofHelp || ""
  }));

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { value, id } = event.target;
    setInputValue((prevInputValue: Step1) => ({
      ...prevInputValue,
      [id]: value
    }));
    dispatch(setStep1Data({ ...step1, [id]: value }));
  };

  const handleButtonChange = (kindofHelp: string) => {
    setActiveButton(kindofHelp);
    dispatch(setStep1Data({ ...step1, kindofHelp }));
  };

  return (
    <div className="steps-generalContainer">
      <h2 className="generalContainer-header">Personal details</h2>
      <div className="personalDetails-data">
        <label className="personalDetails-label" htmlFor="name">
          Name
          <input
            onChange={handleInputChange}
            value={inputValue?.name}
            type="text"
            className="personalDetails-input"
            id="name"
          />
        </label>
      </div>
      <div className="personalDetails-data">
        <label className="personalDetails-label" htmlFor="lastName">
          Last name
          <input
            onChange={handleInputChange}
            value={inputValue?.lastName}
            type="text"
            className="personalDetails-input"
            id="lastName"
          />
        </label>
      </div>
      <div className="personalDetails-data">
        <label className="personalDetails-label" htmlFor="phoneNumber">
          Phone
          <input
            onChange={handleInputChange}
            value={inputValue?.phoneNumber}
            type="text"
            className="personalDetails-input"
            id="phoneNumber"
          />
        </label>
      </div>
      <div className="chooseHelp-container">
        <h3 className="chooseHelp-header">Who are you planning to help?</h3>
        <button
          onClick={() => handleButtonChange("children")}
          type="button"
          className={`chooseHelp-button ${
            step1 && step1.kindofHelp === "children" ? "chosen" : ""
          }`}
        >
          children
        </button>
        <button
          onClick={() => handleButtonChange("lonely mothers")}
          type="button"
          className={`chooseHelp-button ${
            step1 && step1.kindofHelp === "lonely mothers" ? "chosen" : ""
          }`}
        >
          lonely mothers
        </button>
        <button
          onClick={() => handleButtonChange("homeless")}
          type="button"
          className={`chooseHelp-button ${
            step1 && step1.kindofHelp === "homeless" ? "chosen" : ""
          }`}
        >
          homeless
        </button>
        <button
          onClick={() => handleButtonChange("the disabled")}
          type="button"
          className={`chooseHelp-button ${
            step1 && step1.kindofHelp === "the disabled" ? "chosen" : ""
          }`}
        >
          the disabled
        </button>
        <button
          onClick={() => handleButtonChange("the elderly")}
          type="button"
          className={`chooseHelp-button ${
            step1 && step1.kindofHelp === "the elderly" ? "chosen" : ""
          }`}
        >
          the elderly
        </button>
        <button
          onClick={() => handleButtonChange("anyone")}
          type="button"
          className={`chooseHelp-button ${
            step1 && step1.kindofHelp === "anyone" ? "chosen" : ""
          }`}
        >
          anyone
        </button>
      </div>
    </div>
  );
};

export default StepOne;
