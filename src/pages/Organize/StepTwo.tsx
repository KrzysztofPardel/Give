import React, { useState, ChangeEvent } from "react";
import "./SCSS/Steps.scss";
import { useDispatch, useSelector } from "react-redux";
import { setStep2Data } from "../../Redux/formSlice";

export const StepTwo = () => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState<number | undefined>(undefined);
  const { step2 } = useSelector((state: any) => state.form);

  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    // const { value } = event.target;
    // setInputValue((prevInputValue: Step4) => ({
    //   ...prevInputValue,
    //   courierInfo: value
    // }));
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const bagsAmount = parseInt(event.target.value);
    setAmount(bagsAmount);
    dispatch(setStep2Data({ bagsAmount }));
  };

  return (
    <div className="multiform-text_container">
      <h2 className="multiform-text_header">Collection details</h2>
      <div className="collectionDetails-data">
        <label className="collectionDetails-label" htmlFor="name">
          Date
          <input
            // onChange={handleInputChange}
            // value={inputValue?.address}
            type="date"
            className="collectionDetails-input"
            id="name"
          />
        </label>
      </div>
      <div className="collectionDetails-data">
        <label className="collectionDetails-label">
          Time
          <input
            // onChange={handleInputChange}
            // value={inputValue?.address}
            type="time"
            className="collectionDetails-input"
            id="lastName"
          />
        </label>
      </div>
      <div className="collectionDetails-data">
        <label className="collectionDetails-label">
          City
          <input
            // onChange={handleInputChange}
            // value={inputValue?.address}
            type="text"
            className="collectionDetails-input"
            id="lastName"
          />
        </label>
      </div>
      <div className="collectionDetails-data">
        <label className="collectionDetails-label">
          Street
          <input
            // onChange={handleInputChange}
            // value={inputValue?.address}
            type="text"
            className="collectionDetails-input"
            id="lastName"
          />
        </label>
      </div>
      <div className="collectionDetails-data">
        <label htmlFor="courierInfo" className="collectionDetails-label">
          Additional information:
          <textarea
            onChange={handleTextAreaChange}
            // value={inputValue?.courierInfo}
            id="courierInfo"
            className="collectionDetails-textarea"
          />
        </label>
      </div>
    </div>
  );
};

export default StepTwo;
