import React, { useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { setStep3Data } from "../../Redux/formSlice";

export const StepThree = () => {
  const dispatch = useDispatch();
  const [organizations, setOrganizations] = useState<string | null>(null);

  const handleSelect = (help: string) => {
    dispatch(setStep3Data({ help, receivers: "", organization: "" }));
  };
  const handleButtonSelect = (receivers: string) => {
    dispatch(setStep3Data({ help: "", receivers, organization: "" }));
  };
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setOrganizations(value);
    dispatch(setStep3Data({ help: "", receivers: "", organization: value }));
  };

  return (
    <div className="application-location_container">
      <h2 className="application-location_header">Location:</h2>
      <select className="application-location_select">
        <option disabled className="application-location_option">
          Choose
        </option>
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
          className="application-help_button "
        >
          children
        </button>
        <button
          onClick={() => handleButtonSelect("lonely mothers")}
          type="button"
          className="application-help_button "
        >
          lonely mothers
        </button>
        <button
          onClick={() => handleButtonSelect("homeless")}
          type="button"
          className="application-help_button "
        >
          homeless
        </button>
        <button
          onClick={() => handleButtonSelect("the disabled")}
          type="button"
          className="application-help_button "
        >
          the disabled
        </button>
        <button
          onClick={() => handleButtonSelect("the elderly")}
          type="button"
          className="application-help_button "
        >
          the elderly
        </button>
      </div>
      <h3 className="application-location_subheader">
        Enter the name of a particular organization (optional)
      </h3>
      <input
        onChange={handleInput}
        type="text"
        className="application-organization_input"
      />
    </div>
  );
};

export default StepThree;
