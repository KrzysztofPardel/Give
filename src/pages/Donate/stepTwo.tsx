import { ChangeEvent } from "react";
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
      <div className="stepDonate-text_container">
        <h2 className="stepDonate-text_header">
          Choose the amount of 60 liter bags you wish to donate.
        </h2>
        <div className="stepDonate-point_container ">
          <p className="stepDonate-point_text_left">I wish to donate</p>

          <input
            onChange={handleInputChange}
            value={step2 ? step2.bagsAmount : ""}
            type="number"
            required
            className="stepDonate-number_bags "
          />
          <label className="stepDonate-point_text" htmlFor="control_reused">
            x 60 liter bag(s).
          </label>
        </div>
      </div>
      <div className="stepDonate-button_container">
        <button
          type="button"
          className="stepDonate-button"
          onClick={() => setPage(1)}
        >
          Back
        </button>
        <button
          type="button"
          className="stepDonate-button"
          onClick={() => setPage(3)}
          disabled={!step2 || step2.bagsAmount <= 0}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default StepTwo;
