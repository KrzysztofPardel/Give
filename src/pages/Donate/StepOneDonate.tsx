import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStep1Data } from "../../Redux/formSlice";

type StepOneProps = {
  setPage: () => void;
};

const StepOne = ({ setPage }: StepOneProps) => {
  const dispatch = useDispatch();
  const { step1 } = useSelector((state: any) => state.form);
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const [error, setError] = useState<string>("");

  const handleButtonChange = (typeOfHelp: string) => {
    dispatch(setStep1Data({ typeOfHelp }));
    setActiveButton(typeOfHelp);
    setError("");
  };

  const BUTTONS_MARK = [
    { number: 1, name: "clothes" },
    { number: 2, name: "fabrics" },
    { number: 3, name: "toys" },
    { number: 4, name: "books" },
    { number: 5, name: "other" }
  ];
  return (
    <>
      <div className="stepDonate-text_container">
        <h2 className="stepDonate-text_header">
          Mark what you want to donate:
        </h2>
        {BUTTONS_MARK.map(({ number, name }) => {
          return (
            <div key={number} className="stepDonate-point_container">
              <label className="stepDonate-point_text" htmlFor="control_reused">
                {name}
                <button
                  onClick={() => handleButtonChange(`${name}`)}
                  type="button"
                  // id="control_reused"
                  className={`stepDonate-point_button ${
                    step1 && step1.typeOfHelp === `${name}` ? "chosen" : ""
                  }`}
                />
              </label>
            </div>
          );
        })}
      </div>
      <div className="stepDonate-button_container">
        <button
          type="button"
          className="stepDonate-button"
          onClick={() => setPage()}
          disabled={!step1 || !step1.typeOfHelp}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default StepOne;
