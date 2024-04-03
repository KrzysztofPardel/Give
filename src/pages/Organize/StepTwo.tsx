import { useState, ChangeEvent } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { setStep2Data } from "../../Redux/organizeSlice";
import { Step2 } from "../../Redux/organizeSlice";
import { RootState } from "../../Redux/store";

type StepTwoProps = {
  setPage: (x: number) => void;
};

const StepTwo = ({ setPage }: StepTwoProps) => {
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

  const INPUT_DATA = [
    {
      id: 1,
      category: "date",
      type: "date",
      onChange: handleDateChange,
      value: data?.date,
      content: "Date"
    },
    {
      id: 2,
      category: "time",
      type: "time",
      onChange: handleInputChange,
      value: data?.time,
      content: "Time"
    },
    {
      id: 3,
      category: "city",
      type: "text",
      onChange: handleInputChange,
      value: data?.city,
      content: "City"
    },
    {
      id: 4,
      category: "street",
      type: "text",
      onChange: handleInputChange,
      value: data?.street,
      content: "Street"
    }
  ];

  return (
    <>
      <div className="multiform-text_container">
        <h2 className="multiform-text_header">Collection details</h2>
        {INPUT_DATA.map(({ id, category, type, onChange, value, content }) => {
          return (
            <div key={id} className="collectionDetails-data">
              <label className="collectionDetails-label" htmlFor={category}>
                {content}
              </label>
              <input
                onChange={onChange}
                value={value}
                type={type}
                className="collectionDetails-input"
                id={category}
              />
            </div>
          );
        })}
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
