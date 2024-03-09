import React, { useState, ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStep4Data } from "../../Redux/formSlice";
import { Step4 } from "../../Redux/formSlice";
import { RootState } from "../../Redux/store";

type StepFourProps = {
  setPage: (x: number) => void;
};

export const StepFour = ({ setPage }: StepFourProps) => {
  const dispatch = useDispatch();
  const step4 = useSelector((state: RootState) => state.form.step4);

  const [inputValue, setInputValue] = useState<Step4>(() => ({
    address: step4?.address || "",
    city: step4?.city || "",
    zipCode: step4?.zipCode || "",
    phone: step4?.phone || "",
    date: step4?.date || "",
    time: step4?.time || "",
    courierInfo: step4?.courierInfo || ""
  }));

  //Handles text area input
  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setInputValue((prevInputValue: Step4) => ({
      ...prevInputValue,
      courierInfo: value
    }));
  };
  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { value } = event.target;
    setInputValue((prevInputValue: Step4) => ({
      ...prevInputValue,
      date: value
    }));
  };
  //Hanldes any other input
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { value, id } = event.target;
    setInputValue((prevInputValue: Step4) => ({
      ...prevInputValue,
      [id]: value
    }));
  };

  useEffect(() => {
    return () => {
      dispatch(setStep4Data(inputValue));
    };
  }, [inputValue, dispatch]);

  const isStepValid =
    step4 &&
    step4.address &&
    step4.city &&
    step4.courierInfo &&
    step4.date &&
    step4.phone &&
    step4.time &&
    step4.zipCode;

  return (
    <>
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
                value={inputValue?.address}
                type="text"
                className="application-delivery_input"
                id="address"
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
                value={inputValue?.city}
                type="text"
                className="application-delivery_input"
                id="city"
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
                value={inputValue?.zipCode}
                type="text"
                className="application-delivery_input"
                id="zipCode"
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
                value={inputValue?.phone}
                type="text"
                className="application-delivery_input"
                id="phone"
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
                onChange={handleDateChange}
                value={inputValue?.date}
                type="date"
                className="application-delivery_input"
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
                value={inputValue?.time}
                type="time"
                className="application-delivery_input"
                id="time"
              />
            </div>
            <label
              htmlFor="application_delivery_textarea_info"
              className="application-delivery_label"
            >
              Additional information for the courier
              <textarea
                onChange={handleTextAreaChange}
                value={inputValue?.courierInfo}
                id="courierInfo"
                className="application-delivery_textarea"
              />
            </label>
          </div>
        </div>
      </div>
      <div className="application-button_container">
        <button
          type="button"
          className="application-button"
          onClick={() => setPage(3)}
        >
          Back
        </button>
        <button
          type="button"
          className="application-button"
          onClick={() => setPage(5)}
          disabled={!isStepValid}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default StepFour;
