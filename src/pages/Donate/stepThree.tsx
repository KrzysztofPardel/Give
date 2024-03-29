import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStep3Data } from "../../Redux/formSlice";

type StepThreeProps = {
  setPage: (x: number) => void;
};

export const StepThree = ({ setPage }: StepThreeProps) => {
  const dispatch = useDispatch();
  const { step3 } = useSelector((state: any) => state.form);

  const handleSelect = (help: string) => {
    dispatch(setStep3Data({ ...step3, help }));
  };

  const handleButtonSelect = (receivers: string) => {
    dispatch(setStep3Data({ ...step3, receivers }));
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    dispatch(setStep3Data({ ...step3, organization: value }));
  };

  const isStepValid =
    step3 && step3.help && step3.receivers && step3.organization;

  return (
    <>
      <div className="application-location_container">
        <h2 className="application-location_subheader">Location:</h2>
        <select
          className="application-location_select"
          value={step3 ? step3.help : ""}
          onChange={(e) => handleSelect(e.target.value)}
        >
          <option className="application-location_option">Choose city</option>
          <option
            onSelect={() => handleSelect("Gdańsk")}
            className="application-location_option"
          >
            Gdańsk
          </option>
          <option
            onSelect={() => handleSelect("Warszawa")}
            className="application-location_option"
          >
            Warszawa
          </option>
          <option
            onSelect={() => handleSelect("Wrocław")}
            className="application-location_option"
          >
            Wrocław
          </option>
          <option
            onSelect={() => handleSelect("Poznań")}
            className="application-location_option"
          >
            Poznań
          </option>
          <option
            onSelect={() => handleSelect("Katowice")}
            className="application-location_option"
          >
            Katowice
          </option>
        </select>
        <div className="application-help_container">
          <h3 className="application-location_subheader">
            Who would you like to help?
          </h3>
          <button
            onClick={() => handleButtonSelect("children")}
            type="button"
            className={`application-help_button ${
              step3 && step3.receivers === "children" ? "chosen" : ""
            }`}
          >
            children
          </button>
          <button
            onClick={() => handleButtonSelect("lonely mothers")}
            type="button"
            className={`application-help_button ${
              step3 && step3.receivers === "lonely mothers" ? "chosen" : ""
            }`}
          >
            lonely mothers
          </button>
          <button
            onClick={() => handleButtonSelect("homeless")}
            type="button"
            className={`application-help_button ${
              step3 && step3.receivers === "homeless" ? "chosen" : ""
            }`}
          >
            homeless
          </button>
          <button
            onClick={() => handleButtonSelect("the disabled")}
            type="button"
            className={`application-help_button ${
              step3 && step3.receivers === "the disabled" ? "chosen" : ""
            }`}
          >
            the disabled
          </button>
          <button
            onClick={() => handleButtonSelect("the elderly")}
            type="button"
            className={`application-help_button ${
              step3 && step3.receivers === "the elderly" ? "chosen" : ""
            }`}
          >
            the elderly
          </button>
          <button
            onClick={() => handleButtonSelect("anyone")}
            type="button"
            className={`application-help_button ${
              step3 && step3.receivers === "anyone" ? "chosen" : ""
            }`}
          >
            anyone
          </button>
        </div>
        <h3 className="application-location_subheader">
          Enter the name of a particular organization:
        </h3>
        <input
          value={step3 ? step3.organization ?? "" : ""}
          onChange={handleInput}
          type="text"
          className="application-organization_input"
        />
      </div>
      <div className="application-button_container">
        <button
          type="button"
          className="application-button"
          onClick={() => setPage(2)}
        >
          Back
        </button>
        <button
          type="button"
          className="application-button"
          onClick={() => setPage(4)}
          disabled={!isStepValid}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default StepThree;
