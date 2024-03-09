import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStep2Data } from "../../Redux/formSlice";

type StepTwoProps = {
  setPage: (x: number) => void;
};

export const StepTwo = ({ setPage }: StepTwoProps) => {
  const dispatch = useDispatch();
  const { step2 } = useSelector((state: any) => state.form);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const bagsAmount = parseInt(event.target.value);
    dispatch(setStep2Data({ bagsAmount }));
  };

  return (
    <>
      <div className="application-text_container">
        <h2 className="application-text_header">
          Choose the amount of 60 liter bags you wish to donate.
        </h2>
        <div className="application-point_container">
          <p className="application-point_text_left">I want to donate</p>
          <label className="application-point_text" htmlFor="control_reused">
            x 60 liter bag(s).
            <input
              onChange={handleInputChange}
              value={step2 ? step2.bagsAmount : ""}
              type="number"
              required
              className="application-number_bags"
            />
          </label>
        </div>
      </div>
      <div className="application-button_container">
        <button
          type="button"
          className="application-button"
          onClick={() => setPage(1)}
        >
          Back
        </button>
        <button
          type="button"
          className="application-button"
          onClick={() => setPage(3)}
          disabled={!step2}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default StepTwo;
