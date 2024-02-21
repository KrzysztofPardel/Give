import { useState } from "react";
import { useDispatch } from "react-redux";
import "./SCSS/Application.scss";
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import StepThree from "./stepThree";
import StepFour from "./stepFour";
import Summary from "./Summary";
import Appreciation from "./Appreciation";
import { resetForm } from "../../Redux/formSlice";

const Multiform = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState<number>(1);
  const handleBack = (e: any) => {
    e.preventDefault();

    setPage((prev) => prev - 1);
  };
  const handleNext = (e: any) => {
    e.preventDefault();
    setPage((prev) => prev + 1);
  };
  const handleSubmitForm = (e: any) => {
    //tutaj logika wysyłania danych do Firebase
  };
  const handleNewForm = (e: any) => {
    e.preventDefault();
    dispatch(resetForm);
  };
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
          <p className="application-steps">{page !== 6 && `Step ${page}/5`}</p>
          <div className="application-point_invisible_container">
            {page === 1 && <StepOne />}
            {page === 2 && <StepTwo />}
            {page === 3 && <StepThree />}
            {page === 4 && <StepFour />}
            {page === 5 && <Summary />}
            {page === 6 && <Appreciation />}
          </div>
          <div className="application-button_container">
            {page === 1 && (
              <>
                <button
                  type="button"
                  className="application-button"
                  onClick={handleNext}
                >
                  Next
                </button>
              </>
            )}
            {page > 1 && page < 5 && (
              <>
                <button
                  type="button"
                  className="application-button"
                  onClick={handleBack}
                >
                  Back
                </button>
                <button
                  type="button"
                  className="application-button"
                  onClick={handleNext}
                >
                  Next
                </button>
              </>
            )}
            {page === 5 && (
              <>
                <button
                  type="button"
                  className="application-button"
                  onClick={handleBack}
                >
                  Back
                </button>
                <button
                  type="button"
                  className="application-button"
                  onClick={handleSubmitForm}
                >
                  Submit Form
                </button>
              </>
            )}
            {page === 6 && (
              <>
                <button
                  type="button"
                  className="application-button"
                  onClick={handleNewForm}
                >
                  Start New Form
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Multiform;
