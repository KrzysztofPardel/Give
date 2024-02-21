import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStep1Data } from "../../Redux/formSlice";

export const StepOne = () => {
  const dispatch = useDispatch();
  const { step1 } = useSelector((state: any) => state.form);
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleButtonChange = (typeOfHelp: string) => {
    dispatch(setStep1Data({ typeOfHelp }));
    setActiveButton(typeOfHelp);
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
            id="control_reused"
            className={`application-point_button ${
              step1 && step1.typeOfHelp === "clothes, which can be reused"
                ? "chosen"
                : ""
            }`}
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
            className={`application-point_button ${
              step1 && step1.typeOfHelp === "clothes, which cannot be reused"
                ? "chosen"
                : ""
            }`}
          />
        </label>
      </div>
      <div className="application-point_container">
        <label className="application-point_text">
          toys
          <button
            onClick={() => handleButtonChange("toys")}
            type="button"
            className={`application-point_button ${
              step1 && step1.typeOfHelp === "toys" ? "chosen" : ""
            }`}
          />
        </label>
      </div>
      <div className="application-point_container">
        <label className="application-point_text">
          books
          <button
            onClick={() => handleButtonChange("books")}
            type="button"
            className={`application-point_button ${
              step1 && step1.typeOfHelp === "books" ? "chosen" : ""
            }`}
          />
        </label>
      </div>
      <div className="application-point_container">
        <label className="application-point_text">
          other
          <button
            onClick={() => handleButtonChange("other")}
            type="button"
            className={`application-point_button ${
              step1 && step1.typeOfHelp === "other" ? "chosen" : ""
            }`}
          />
        </label>
      </div>
    </div>
  );
};

export default StepOne;
