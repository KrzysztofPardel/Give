import { useState, ChangeEvent } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { setStep1Data } from "../../Redux/organizeSlice";
import { Step1 } from "../../Redux/organizeSlice";
import { RootState } from "../../Redux/store";

type StepOneProps = {
  setPage: (x: number) => void;
};

const StepOne = ({ setPage }: StepOneProps) => {
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
  const isStepOneValid =
    step1 &&
    step1.name &&
    step1.lastName &&
    step1.phoneNumber &&
    step1.kindofHelp;

  const INPUT_DATA = [
    { id: 1, type: "name", value: inputValue?.name, content: "Name" },
    {
      id: 2,
      type: "lastName",
      value: inputValue?.lastName,
      content: "Last Name"
    },
    {
      id: 3,
      type: "phoneNumber",
      value: inputValue?.phoneNumber,
      content: "Phone"
    }
  ];

  const BUTTON_DATA = [
    { id: 1, type: "children" },
    { id: 2, type: "single mothers" },
    { id: 3, type: "homeless" },
    { id: 4, type: "disabled" },
    { id: 5, type: "elderly" },
    { id: 6, type: "anyone" }
  ];

  return (
    <>
      <div className="step-container_general">
        <h2 className="general-header">Personal details</h2>
        {INPUT_DATA.map(({ id, type, value, content }) => {
          return (
            <div key={id} className="personalDetails-data">
              <label className="personalDetails-label" htmlFor={type}>
                {content}
              </label>
              <input
                onChange={handleInputChange}
                value={value}
                type="text"
                className="personalDetails-input"
                id={type}
              />
            </div>
          );
        })}
        <div className="chooseHelp-container">
          <h3 className="chooseHelp-header">Who are you planning to help?</h3>
          {BUTTON_DATA.map(({ id, type }) => {
            return (
              <button
                key={id}
                onClick={() => handleButtonChange(`${type}`)}
                type="button"
                className={`chooseHelp-button ${
                  step1 && step1.kindofHelp === `${type}` ? "chosen" : ""
                }`}
              >
                {type}
              </button>
            );
          })}
        </div>
      </div>
      <div className="multiform-button_container">
        <button
          type="button"
          className="multiform-button"
          onClick={() => setPage(2)}
          disabled={!isStepOneValid}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default StepOne;
