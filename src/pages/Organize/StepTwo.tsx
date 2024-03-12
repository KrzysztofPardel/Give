import { useState, ChangeEvent } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { setStep2Data } from "../../Redux/organizeSlice";
import { Step2 } from "../../Redux/organizeSlice";
import { RootState } from "../../Redux/store";

type StepTwoProps = {
  setPage: (x: number) => void;
};

export const StepTwo = ({ setPage }: StepTwoProps) => {
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

  const isStepTwoValid =
    step2 &&
    step2.date &&
    step2.time &&
    step2.city &&
    step2.street &&
    step2.addInfo;

  return (
    <>
      <div className="multiform-text_container">
        <h2 className="multiform-text_header">Collection details</h2>
        <div className="collectionDetails-data">
          <label className="collectionDetails-label" htmlFor="name">
            Date
          </label>
          <input
            onChange={handleDateChange}
            value={data?.date}
            type="date"
            className="collectionDetails-input"
            id="date"
          />
        </div>
        <div className="collectionDetails-data">
          <label className="collectionDetails-label">Time</label>
          <input
            onChange={handleInputChange}
            value={data?.time}
            type="time"
            className="collectionDetails-input"
            id="time"
          />
        </div>
        <div className="collectionDetails-data">
          <label className="collectionDetails-label">City</label>
          <input
            onChange={handleInputChange}
            value={data?.city}
            type="text"
            className="collectionDetails-input"
            id="city"
          />
        </div>
        <div className="collectionDetails-data">
          <label className="collectionDetails-label">Street</label>
          <input
            onChange={handleInputChange}
            value={data?.street}
            type="text"
            className="collectionDetails-input"
            id="street"
          />
        </div>
        <div className="collectionDetails-data">
          <label htmlFor="courierInfo" className="collectionDetails-label">
            Additional information:
          </label>
          <textarea
            onChange={handleTextAreaChange}
            value={data?.addInfo}
            id="courierInfo"
            className="collectionDetails-textarea"
          />
        </div>
      </div>
      <div className="multiform-button_container">
        <button
          type="button"
          className="multiform-button"
          onClick={() => setPage(1)}
        >
          Back
        </button>
        <button
          type="button"
          className="multiform-button"
          onClick={() => setPage(3)}
          disabled={!isStepTwoValid}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default StepTwo;
