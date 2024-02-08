import React from "react";

export const StepThree = () => {
  return (
    <div className="application-location_container">
      <h2 className="application-location_header">Location:</h2>
      <select className="application-location_select">
        <option className="application-location_option">Choose</option>
        <option className="application-location_option">Gdańsk</option>
        <option className="application-location_option">Warszawa</option>
        <option className="application-location_option">Wrocław</option>
        <option className="application-location_option">Poznań</option>
        <option className="application-location_option">Katowice</option>
      </select>
      <div className="application-help_container">
        <h3 className="application-location_subheader">
          Who would you like to help?{" "}
        </h3>
        <button type="button" className="application-help_button ">
          children
        </button>
        <button type="button" className="application-help_button ">
          lonely mothers
        </button>
        <button type="button" className="application-help_button ">
          homeless
        </button>
        <button type="button" className="application-help_button ">
          the disabled
        </button>
        <button type="button" className="application-help_button ">
          the elderly
        </button>
      </div>
      <h3 className="application-location_subheader">
        Enter the name of a particular organization (optional)
      </h3>
      <input type="text" className="application-organization_input" />
    </div>
  );
};

export default StepThree;
