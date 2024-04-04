import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStep3Data } from "../../Redux/formSlice";
//react select
import React from "react";
import Select from "react-select";

type StepThreeProps = {
  setPage: (x: number) => void;
};

const StepThree = ({ setPage }: StepThreeProps) => {
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

  //select styles
  const selectStyles = {
    control: (baseStyles: any, state: any) => ({
      ...baseStyles,
      borderColor: state.isFocused ? "#fad648" : "black",
      width: "15rem",
      fontSize: "1rem",
      padding: "0rem 0.5rem",
      color: "black",
      backgroundColor: "#ffffff",
      borderRadius: "0",
      marginLeft: "none"
    }),
    menu: (provided: any) => ({
      ...provided,
      backgroundColor: "white" // Change this to the desired background color
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      color: "black",
      backgroundColor: state.isSelected ? "white" : "white"
    }),
    container: (provided: any, state: any) => ({
      ...provided,
      margin: "0rem"
    })
  };

  const SELECT_OPTIONS = [
    {
      value: "Gdańsk",
      label: "Gdańsk"
    },
    {
      value: "Warszawa",
      label: "Warszawa"
    },
    {
      value: "Wrocław",
      label: "Wrocław"
    },
    {
      value: "Poznań",
      label: "Poznań"
    },
    {
      value: "Katowice",
      label: "Katowice"
    }
  ];

  const HELP_BUTTONS = [
    {
      id: 1,
      type: "children"
    },
    {
      id: 2,
      type: "single mothers"
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
        <Select
          options={SELECT_OPTIONS}
          styles={selectStyles}
          onChange={(option) => handleSelect(option ? option.value : "")}
          value={step3 ? step3.city : null}
        />

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
