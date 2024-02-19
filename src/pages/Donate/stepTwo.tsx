import React, { useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { setStep2Data } from "../../Redux/formSlice";

export const StepTwo = () => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState<number | undefined>(undefined);
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const bagsAmount = parseInt(event.target.value);
    setAmount(bagsAmount);
    dispatch(setStep2Data({ bagsAmount }));
  };

  return (
    <div className="application-text_container">
      <h2 className="application-text_header">
        Choose the amount of 60 liter bags you wish to donate.
      </h2>
      <div className="application-point_container">
        <p className="application-point_text_left">I want to donate</p>
        <label className="application-point_text" htmlFor="control_reused">
          x 60 liter bags.
          <input
            onChange={handleInputChange}
            type="number"
            required
            className="application-number_bags"
          />
        </label>
      </div>
    </div>
  );
};

export default StepTwo;
