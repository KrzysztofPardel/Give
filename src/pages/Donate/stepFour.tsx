import React, { useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { setStep4Data } from "../../Redux/formSlice";

export const StepFour = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState<string>();
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    dispatch(setStep4Data({}))
  };

  return (
    <div className="application-delivery_container">
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
              Street
            </label>
            <input
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              Zip Code
            </label>

            <input
              onChange={handleInputChange}
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
              Phone number
            </label>
            <input
              onChange={handleInputChange}
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
              Date
            </label>
            <input
              onChange={handleInputChange}
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
              Time
            </label>
            <input
              onChange={handleInputChange}
              type="time"
              className="application-delivery_input"
              id="application_delivery_input_time"
            />
          </div>
          <label
            htmlFor="application_delivery_textarea_info"
            className="application-delivery_label"
          >
            Additional information for the courier
            <textarea
              onChange={handleInputChange}
              id="application_delivery_textarea_info"
              className="application-delivery_textarea"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
