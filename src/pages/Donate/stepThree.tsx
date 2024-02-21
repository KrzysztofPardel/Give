import React, { useState, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStep3Data } from "../../Redux/formSlice";

export const StepThree = () => {
  const dispatch = useDispatch();
  const { step3 } = useSelector((state: any) => state.form);
  const [organizations, setOrganizations] = useState<string | null>(
    step3?.organization || ""
  );

  const handleSelect = (help: string) => {
    dispatch(setStep3Data({ ...step3, help }));
  };
  const handleButtonSelect = (receivers: string) => {
    dispatch(setStep3Data({ ...step3, receivers }));
  };
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setOrganizations(value);
    dispatch(setStep3Data({ ...step3, organization: value }));
  };

  return (
    <div className="application-location_container">
      <h2 className="application-location_header">Location:</h2>
      <select
        className="application-location_select"
        value={step3 ? step3.help : ""}
        onChange={(e) => handleSelect(e.target.value)}
      >
        <option className="application-location_option">Choose</option>
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
      </div>
      <h3 className="application-location_subheader">
        Enter the name of a particular organization (optional)
      </h3>
      <input
        value={organizations ?? ""} //nullish coalescing operator
        //the operator will make value default to an empty string if there are nor org.
        onChange={handleInput}
        type="text"
        className="application-organization_input"
      />
    </div>
  );
};

export default StepThree;
