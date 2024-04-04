import { useState, ChangeEvent, useEffect } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { setStep4Data } from "../../Redux/formSlice";
import { Step4 } from "../../Redux/formSlice";

type StepFourProps = {
  setPage: (x: number) => void;
};

const StepFour = ({ setPage }: StepFourProps) => {
  const dispatch = useDispatch();
  const step4 = useSelector((state: RootState) => state.form.step4);
  const uid = useSelector((state: RootState) => state.auth.user?.uid);

  const [inputValue, setInputValue] = useState<Step4>(() => ({
    address: step4?.address || "",
    city: step4?.city || "",
    zipCode: step4?.zipCode || "",
    phone: step4?.phone || "",
    date: step4?.date || "",
    time: step4?.time || "",
    courierInfo: step4?.courierInfo || "",
    uid: uid || ""
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

  //validation
  const isStepValid =
    step4 &&
    step4.address &&
    step4.city &&
    step4.courierInfo &&
    step4.date &&
    step4.phone &&
    step4.time &&
    step4.zipCode;

  const INPUT_DATA = [
    {
      id: 1,
      htmlFor: "application_delivery_input_street",
      labelContent: "Street",
      value: inputValue?.address,
      idInput: "address"
    },
    {
      id: 2,
      htmlFor: "application_delivery_input_city",
      labelContent: "City",
      value: inputValue?.city,
      idInput: "city"
    },
    {
      id: 3,
      htmlFor: "application_delivery_input_zip",
      labelContent: "Zip Code",
      value: inputValue?.zipCode,
      idInput: "zipCode"
    },
    {
      id: 4,
      htmlFor: "application_delivery_input_phone",
      labelContent: "Phone number",
      value: inputValue?.phone,
      idInput: "phone"
    }
  ];

  const INPUT_DATA_TWO = [
    {
      id: 5,
      htmlFor: "application_delivery_input_date",
      onChange: handleDateChange,
      labelContent: "Date",
      value: inputValue?.date,
      type: "date"
    },
    {
      id: 6,
      htmlFor: "application_delivery_input_time",
      onChange: handleInputChange,
      labelContent: "Time",
      value: inputValue?.time,
      type: "time"
    }
  ];

  return (
    <>
      <div className="stepDonate-delivery_container">
        <h2 className="stepDonate-delivery_header">
          Give us the address that you want the courier to go to:
        </h2>
        <div className="stepDonate-delivery_both_containers">
          <div className="stepDonate-delivery_left_container">
            <h3 className="stepDonate-delivery_subheader">
              Enter the collection address:
            </h3>
            {INPUT_DATA.map(({ id, htmlFor, labelContent, value, idInput }) => {
              return (
                <div className="stepDonate-delivery_small_container" key={id}>
                  <label
                    htmlFor={htmlFor}
                    className="stepDonate-delivery_label"
                  >
                    {labelContent}
                  </label>
                  <input
                    onChange={handleInputChange}
                    value={value}
                    type="text"
                    className="stepDonate-delivery_input"
                    id={idInput}
                  />
                </div>
              );
            })}
          </div>
          <div className="stepDonate-delivery_right_container">
            <h3 className="stepDonate-delivery_subheader">
              Enter the collection date:
            </h3>
            <div className="stepDonate-delivery_small_container">
              <label
                htmlFor="application_delivery_input_date"
                className="stepDonate-delivery_label"
              >
                Date
              </label>
              <input
                onChange={handleDateChange}
                value={inputValue?.date}
                type="date"
                className="stepDonate-delivery_input"
              />
            </div>
            <div className="stepDonate-delivery_small_container">
              <label
                htmlFor="application_delivery_input_time"
                className="stepDonate-delivery_label"
              >
                Time
              </label>
              <input
                onChange={handleInputChange}
                value={inputValue?.time}
                type="time"
                className="stepDonate-delivery_input"
                id="time"
              />
            </div>

            <label
              htmlFor="application_delivery_textarea_info"
              className="stepDonate-delivery_label"
            >
              Additional information for the courier
              <textarea
                onChange={handleTextAreaChange}
                value={inputValue?.courierInfo}
                id="courierInfo"
                className="stepDonate-delivery_textarea"
              />
            </label>
          </div>
        </div>
      </div>
      <div className="stepDonate-button_container">
        <button
          type="button"
          className="stepDonate-button"
          onClick={() => setPage(3)}
        >
          Back
        </button>
        <button
          type="button"
          className="stepDonate-button"
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
