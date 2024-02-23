import React, { useState, ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStep2Data } from "../../Redux/organizeSlice";
import { Step2 } from "../../Redux/organizeSlice";
import { RootState } from "../../Redux/store";

export const StepTwo = () => {
  const dispatch = useDispatch();
  const step2 = useSelector(
    (state: RootState) => state.organize.step2
  ) as Step2;

  const [data, setData] = useState<Step2>(() => ({
    date: step2?.date || "",
    time: step2?.time || "",
    city: step2?.city || "",
    street: step2?.street || "",
    addInfo: step2?.addInfo || ""
  }));

  //Handles the rest of the inputs
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { value, id } = event.target;
    setData((prevInputData: Step2) => ({
      ...prevInputData,
      [id]: value
    }));
    dispatch(setStep2Data({ ...step2, [id]: value }));
  };

  //Handles date input
  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { value } = event.target;
    setData((prevInputData: Step2) => ({
      ...prevInputData,
      date: value
    }));
    dispatch(setStep2Data({ ...step2, date: value }));
  };

  //Handles textarea input
  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    const { value } = event.target;
    setData((prevInputData: Step2) => ({
      ...prevInputData,
      addInfo: value
    }));
    dispatch(setStep2Data({ ...step2, addInfo: value }));
  };

  return (
    <div className="multiform-text_container">
      <h2 className="multiform-text_header">Collection details</h2>
      <div className="collectionDetails-data">
        <label className="collectionDetails-label" htmlFor="name">
          Date
          <input
            onChange={handleDateChange}
            value={data?.date}
            type="date"
            className="collectionDetails-input"
            id="date"
          />
        </label>
      </div>
      <div className="collectionDetails-data">
        <label className="collectionDetails-label">
          Time
          <input
            onChange={handleInputChange}
            value={data?.time}
            type="time"
            className="collectionDetails-input"
            id="time"
          />
        </label>
      </div>
      <div className="collectionDetails-data">
        <label className="collectionDetails-label">
          City
          <input
            onChange={handleInputChange}
            value={data?.city}
            type="text"
            className="collectionDetails-input"
            id="city"
          />
        </label>
      </div>
      <div className="collectionDetails-data">
        <label className="collectionDetails-label">
          Street
          <input
            onChange={handleInputChange}
            value={data?.street}
            type="text"
            className="collectionDetails-input"
            id="street"
          />
        </label>
      </div>
      <div className="collectionDetails-data">
        <label htmlFor="courierInfo" className="collectionDetails-label">
          Additional information:
          <textarea
            onChange={handleTextAreaChange}
            value={data?.addInfo}
            id="courierInfo"
            className="collectionDetails-textarea"
          />
        </label>
      </div>
    </div>
  );
};

export default StepTwo;
