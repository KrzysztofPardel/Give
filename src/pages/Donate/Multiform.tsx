import { useState } from "react";
import "./SCSS/MultiformDonate.scss";
import { useNavigate } from "react-router-dom";
//Components
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import StepThree from "./stepThree";
import StepFour from "./stepFour";
import Summary from "./summary";
import Appreciation from "./appreciation";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { resetForm } from "../../Redux/formSlice";
import { incrementCounter } from "../../Redux/dataCounterSlice";
//Database
import { dbMultiform } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

const Multiform = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formData = useSelector((state: any) => state.form);
  const user = useSelector((state: RootState) => state.auth.user);
  const { step1, step2, step3, step4 } = formData;
  const [page, setPage] = useState<number>(1);
  const [donationsCounter, setDonationsCounter] = useState<number>(0);
  const [isStepTwoCompleted, setIsStepTwoCompleted] = useState<boolean>(false);
  const [isStepThreeCompleted, setIsStepThreeCompleted] =
    useState<boolean>(false);
  const [isStepFourCompleted, setIsStepFourCompleted] =
    useState<boolean>(false);

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

    const countData = () => {
      setDonationsCounter((prevValue) => prevValue + 1);
    };

    const summaryData = formatSummaryData();
    await addSummary(summaryData);
    //add one form the users' amount of forms
    countData();
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

  const handleRedirect = () => {
    if (user) {
      navigate("/organize");
    } else {
      navigate("/signin");
    }
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
      <div className="donateMultiform-container">
        <div className="donateMultiform-container_top">
          <h2 className="donateMultiform-top_header">Important!</h2>
          <p className="donateMultiform-top_paragraph">
            Fill out the details concerning the items you want to give. This way
            we will be able to know who should receive them.
          </p>
        </div>
        <div
          className={
            page === 5
              ? `donateMultiform-container_bottom extendedContainer`
              : `donateMultiform-container_bottom`
          }
        >
          <p className="donateMultiform-steps">
            {page !== 6 && `Step ${page}/5`}
          </p>
          <div className="donateMultiform-point_invisible_container">
            {page === 1 && <StepOne setPage={() => setPage(2)} />}
            {page === 2 && <StepTwo setPage={(x: number) => setPage(x)} />}
            {page === 3 && <StepThree setPage={(x: number) => setPage(x)} />}
            {page === 4 && <StepFour setPage={(x: number) => setPage(x)} />}
            {page === 5 && <Summary />}
            {page === 6 && <Appreciation />}
          </div>
          <div
            className={
              page === 5
                ? `stepDonate-button_container longMargin`
                : `stepDonate-button_container`
            }
          >
            {page === 5 && (
              <>
                <button
                  type="button"
                  className="stepDonate-button"
                  onClick={handleBack}
                >
                  Back
                </button>
                <button
                  type="button"
                  className="stepDonate-button"
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
                  className="stepDonate-button"
                  onClick={handleNewForm}
                >
                  Start New Form
                </button>
              </>
            )}
          </div>
        </div>
        <div className="donateMultiform-redirection">
          <p className="redirection-paragraph">
            What if you organized your own collection?
          </p>
          <button onClick={handleRedirect} type="button" className="button">
            Organize
          </button>
        </div>
      </div>
    </div>
  );
};

export default Multiform;
