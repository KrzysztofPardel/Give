import { useState } from "react";

import "./SCSS/Application.scss";

const Application = () => {
  //   const handleClick = () => {
  //     navigate("/signin");
  //   };
  return (
    <div className="application-background">
      <div className="application-container">
        <div className="application-container_top">
          <h2 className="application_top_header">Important!</h2>
          <p className="application_top_paragraph">
            Fill out the details concerning the items you want to give. This way
            we will be able to know who should receive them.
          </p>
        </div>
        <div className="application-container_bottom">
          <p className="application-steps">Krok 1/4</p>
          <div className="application-point_invisible_container">
            {/* Step 1 */}
            {/* <div className="application-text_container">
              <h2 className="application-text_header">
                Mark what you want to donate:
              </h2>
              <div className="application-point_container">
                <label
                  className="application-point_text"
                  htmlFor="control_reused"
                >
                  clothes, which can be reused
                  <button type="button" className="application-point_button" />
                </label>
              </div>
              <div className="application-point_container">
                <label className="application-point_text">
                  clothes, which cannot be reused
                  <button type="button" className="application-point_button" />
                </label>
              </div>
              <div className="application-point_container">
                <label className="application-point_text">
                  toys
                  <button type="button" className="application-point_button" />
                </label>
              </div>
              <div className="application-point_container">
                <label className="application-point_text">
                  books
                  <button type="button" className="application-point_button" />
                </label>
              </div>
              <div className="application-point_container">
                <label className="application-point_text">
                  other
                  <button type="button" className="application-point_button" />
                </label>
              </div>
            </div> */}
            {/* Step 2 */}
            {/* <div className="application-text_container">
              <h2 className="application-text_header">
                Choose the amount of 60 liter bags wish to donate:
              </h2>
              <div className="application-point_container">
                <p className="application-point_text_left">
                  {" "}
                  I want to donate{" "}
                </p>
                <label
                  className="application-point_text"
                  htmlFor="control_reused"
                >
                  x 60 liter bags.
                  <input type="number" className="application-number_bags" />
                </label>
              </div>
            </div> */}
            {/* Step 3 */}
            <div className="application-location_container">
              <h2 className="application-location_header">Location:</h2>
              <select className="application-location_select">
                <option className="application-location_option">Choose</option>
                <option className="application-location_option">Gdańsk</option>
                <option className="application-location_option">
                  Warszawa
                </option>
                <option className="application-location_option">Wrocław</option>
                <option className="application-location_option">Poznań</option>
                <option className="application-location_option">
                  Katowice
                </option>
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

            {/* Step 4 */}
          </div>
          <div className="application-button_container">
            <button type="button" className="application-button">
              Back
            </button>
            <button type="button" className="application-button">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
