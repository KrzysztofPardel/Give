import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./SCSS/Application.scss";
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import StepThree from "./stepThree";
import StepFour from "./stepFour";
import Summary from "./Summary";
import Appreciation from "./Appreciation";
import { resetForm } from "../../Redux/formSlice";
import { dbMultiform } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { incrementCounter } from "../../Redux/dataCounterSlice";

const Multiform = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state: any) => state.form);
  const { step1, step2, step3, step4 } = formData;
  const [page, setPage] = useState<number>(1);
  const [donationsCounter, setDonationsCounter] = useState<number>(0);

  //previous form page
  const handleBack = (e: any) => {
    e.preventDefault();
    setPage((prev) => prev - 1);
  };

  //next form page
  const handleNext = (e: any) => {
    e.preventDefault();
    setPage((prev) => prev + 1);
  };

  //form submission
  const handleSubmitForm = async (e: any) => {
    e.preventDefault();

    const addSummary = async (summaryData: any) => {
      try {
        const docRef = await addDoc(
          collection(dbMultiform, "summaries"),
          summaryData
        );
        console.log("Summary document written with ID", docRef.id);
        return docRef.id;
      } catch (e: any) {
        console.error("Error adding summary document: ", e);
      }
    };

    const CountData = () => {
      setDonationsCounter((prevValue) => prevValue + 1);
    };

    const summaryData = formatSummaryData();
    await addSummary(summaryData);
    //add one form the the users' amount of forms
    CountData();
    dispatch(incrementCounter());
    //reseting all pages of the form
    dispatch(resetForm());
    setPage(6);
  };

  //begin a new form
  const handleNewForm = (e: any) => {
    e.preventDefault();
    setPage(1);
  };

  //format Summary data
  const formatSummaryData = () => {
    const summaryData = {
      step1: formData.step1,
      step2: formData.step2,
      step3: formData.step3,
      step4: formData.step4
    };
    return summaryData;
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
