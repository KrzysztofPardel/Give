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

  //validation
  const isStepValid =
    step3 && step3.help && step3.receivers && step3.organization;

  //mapping through select options
  const SELECT_OPTIONS = [
    {
      id: 1,
      city: "Gdańsk"
    },
    {
      id: 2,
      city: "Warszawa"
    },
    {
      id: 3,
      city: "Wrocław"
    },
    {
      id: 4,
      city: "Poznań"
    },
    {
      id: 5,
      city: "Katowice"
    }
  ];

  const HELP_BUTTONS = [
    {
      id: 1,
      type: "children"
    },
    {
      id: 2,
      type: "lonely mothers"
    },
    {
      id: 3,
      type: "homeless"
    },
    {
      id: 4,
      type: "disabled"
    },
    {
      id: 5,
      type: "elderly"
    },
    {
      id: 6,
      type: "anyone"
    }
  ];

  return (
    <>
      <div className="stepDonate-location_container">
        <h2 className="stepDonate-location_subheader">Location:</h2>
        <select
          className="stepDonate-location_select"
          value={step3 ? step3.help : ""}
          onChange={(e) => handleSelect(e.target.value)}
        >
          <option className="stepDonate-location_option" disabled>
            Choose city
          </option>
          {SELECT_OPTIONS.map(({ id, city }) => {
            return (
              <option
                key={id}
                onSelect={() => handleSelect(`${city}`)}
                className="stepDonate-location_option"
              >
                {city}
              </option>
            );
          })}
        </select>
        <div className="stepDonate-help_container">
          <h3 className="stepDonate-location_subheader">
            Who would you like to help?
          </h3>

          {HELP_BUTTONS.map(({ id, type }) => {
            return (
              <button
                key={id}
                onClick={() => handleButtonSelect(`${type}`)}
                type="button"
                className={`stepDonate-help_button ${
                  step3 && step3.receivers === `${type}` ? "chosen" : ""
                }`}
              >
                {type}
              </button>
            );
          })}
        </div>
        <h3 className="stepDonate-location_subheader">
          Enter the name of a particular organization:
        </h3>
        <input
          value={step3 ? step3.organization ?? "" : ""}
          onChange={handleInput}
          type="text"
          className="stepDonate-organization_input"
        />
      </div>
      <div className="stepDonate-button_container">
        <button
          type="button"
          className="stepDonate-button"
          onClick={() => setPage(2)}
        >
          Back
        </button>
        <button
          type="button"
          className="stepDonate-button"
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
