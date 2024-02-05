import { useState } from "react";
import Decoration from "../../assets/Decoration.svg";
import IconOne from "../../assets/IconOne.svg";
import IconFour from "../../assets/IconFour.svg";

import "./SCSS/Application.scss";

const Multiform = () => {
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
          <p className="application-steps">Step 1/4</p>
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
            {/* <div className="application-location_container">
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
            </div> */}
            {/* Step 4 */}
            {/* <div className="application-delivery_container">
              <h2 className="application-delivery_header">
                Give us the address that you want the courier to go to:
              </h2>
              <div className="application-delivery_both_containers">
                <div className="application-delivery_left_container">
                  <h3 className="application-delivery_subheader">
                    Enter the collection address:
                  </h3>
                  <div className="application-delivery_small_container">
                    <label
                      htmlFor="application_delivery_input_street"
                      className="application-delivery_label"
                    >
                      {" "}
                      Street
                    </label>
                    <input
                      type="text"
                      className="application-delivery_input"
                      id="application_delivery_input_street"
                    />
                  </div>
                  <div className="application-delivery_small_container">
                    <label
                      htmlFor="application_delivery_input_city"
                      className="application-delivery_label"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      className="application-delivery_input"
                      id="application_delivery_input_city"
                    />
                  </div>
                  <div className="application-delivery_small_container">
                    <label
                      htmlFor="application_delivery_input_zip"
                      className="application-delivery_label"
                    >
                      {" "}
                      Zip Code
                    </label>
                    <input
                      type="text"
                      className="application-delivery_input"
                      id="application_delivery_input_zip"
                    />
                  </div>
                  <div className="application-delivery_small_container">
                    <label
                      htmlFor="application_delivery_input_phone"
                      className="application-delivery_label"
                    >
                      {" "}
                      Phone number
                    </label>
                    <input
                      type="text"
                      className="application-delivery_input"
                      id="application_delivery_input_phone"
                    />
                  </div>
                </div>
                <div className="application-delivery_right_container">
                  <h3 className="application-delivery_subheader">
                    Enter the collection date:
                  </h3>
                  <div className="application-delivery_small_container">
                    <label
                      htmlFor="application_delivery_input_date"
                      className="application-delivery_label"
                    >
                      {" "}
                      Date
                    </label>
                    <input
                      type="date"
                      className="application-delivery_input"
                      id="application_delivery_input_date"
                    />
                  </div>
                  <div className="application-delivery_small_container">
                    <label
                      htmlFor="application_delivery_input_time"
                      className="application-delivery_label"
                    >
                      {" "}
                      Time
                    </label>
                    <input
                      type="time"
                      className="application-delivery_input"
                      id="application_delivery_input_time"
                    />
                  </div>
                  <label
                    htmlFor="application_delivery_textarea_info"
                    className="application-delivery_label"
                  >
                    {" "}
                    Additional information for the courier
                    <textarea
                      id="application_delivery_textarea_info"
                      className="application-delivery_textarea"
                    />
                  </label>
                </div>
              </div>
            </div> */}
            {/* Summary */}
            {/* <div className="application-summary_container">
              <h2 className="application-summary_header">
                The summary of your donation:
              </h2>
              <div className="application-summary_iconSpan_container">
                <div className="application-summary_iconSpan_whatsgiven_container">
                  <img
                    src={IconOne}
                    alt="clothes"
                    className="application-summary_icon"
                  />
                  <span className="application-summary_span">
                    5 bags; clothes, which can be reused; children
                  </span>
                </div>
                <div className="application-summary_iconSpan_whatsgiven_container">
                  <img
                    src={IconFour}
                    alt="reuse"
                    className="application-summary_icon"
                  />
                  <span className="application-summary_span">
                    location: Warszawa
                  </span>
                </div>
              </div>
              <div className="application-summary_both_containers">
                <div className="application-summary_left_container">
                  <h3 className="application-summary_subheader">
                    Enter the collection address:
                  </h3>
                  <div className="application-summary_small_container">
                    <label
                      htmlFor="application_summary_input_street"
                      className="application-summary_label"
                    >
                      {" "}
                      Street
                    </label>
                    <span className="application-summary_span">Niecała 9</span>
                  </div>
                  <div className="application-summary_small_container">
                    <label
                      htmlFor="application_summary_input_city"
                      className="application-summary_label"
                    >
                      City
                    </label>
                    <span className="application-summary_span">Warszawa</span>
                  </div>
                  <div className="application-summary_small_container">
                    <label className="application-summary_label">
                      {" "}
                      Zip Code
                    </label>
                    <span className="application-summary_span">00-098</span>
                  </div>
                  <div className="application-summary_small_container">
                    <label className="application-summary_label">
                      {" "}
                      Phone number
                    </label>
                    <span className="application-summary_span">
                      (+48) 502 202 222
                    </span>
                  </div>
                </div>
                <div className="application-summary_right_container">
                  <h3 className="application-summary_subheader">
                    Enter the collection date:
                  </h3>
                  <div className="application-summary_small_container">
                    <label className="application-summary_label"> Date</label>
                    <span className="application-summary_span">05.05.2023</span>
                  </div>
                  <div className="application-summary_small_container">
                    <label className="application-summary_label"> Time</label>
                    <span className="application-summary_span">17:15</span>
                  </div>
                  <label className="application-summary_label">
                    {" "}
                    Additional information for the courier :
                  </label>
                  <span className="application-summary_info_span">
                    Please, call when you arrive at the street. I will ask my
                    husband to help you pack the bags to the car.{" "}
                  </span>
                </div>
              </div>
            </div> */}
            {/* Appreciation */}
            {/* <div className="application-appreciation_container">
              <div className="application-appreciation_container_small">
                <h2 className="application-appreciation_header">
                  Thank you for the submission of this form. We have just sent
                  you an email which received details concerning the collection.
                </h2>
                <img
                  src={Decoration}
                  alt="decoration"
                  className="application-appreciation_decoration"
                />
              </div>
            </div> */}
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

export default Multiform;
