import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./SCSS/Multiform.scss";
import "./SCSS/Steps.scss";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import Summary from "./Summary";
import Appreciation from "./Appreciation";
import { resetForm } from "../../Redux/organizeSlice";
import { RootState } from "../../Redux/store";
import { dbMultiformOrganize } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Multiform = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state: any) => state.form);
  // const { step1, step2 } = formData;
  const [page, setPage] = useState<number>(1);
  const [collectionsCounter, setCollectionsCounter] = useState<number>(0);

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
          collection(dbMultiformOrganize, "summaries Organize"),
          summaryData
        );
        console.log("Summary document written with ID", docRef.id);
        return docRef.id;
      } catch (e: any) {
        console.error("Error adding summary document: ", e);
      }
    };

    const CountData = (e: any) => {
      e.preventDefault();
      setCollectionsCounter((prevValue) => prevValue + 1);
    };

    const summaryData = formatSummaryData();
    await addSummary(summaryData);
    //add one form the the users' amount of forms
    CountData(collectionsCounter);
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
      step2: formData.step2
    };
    return summaryData;
  };

 

  return (
    <div className="multiform-background">
      <div className="multiform-container">
        <div className="multiform-container_top">
          <h2 className="multiform-top_header">Important!</h2>
          <p className="multiform-top_paragraph">
            Fill out the details concerning the collection you want to organize.
          </p>
        </div>

       
        <div className="multiform-container_bottom">
          <p className="multiform-steps">{page !== 4 && `Step ${page} / 3`}</p>
          <div className="multiform-stepsContainer">
            {page === 1 && <StepOne setPage={() => setPage(2)} />}
            {page === 2 && <StepTwo setPage={(x) => setPage(x)} />}
            {page === 3 && <Summary />}
            {page === 4 && <Appreciation />}
          </div>
          <div className="multiform-button_container">
            {page === 3 && (
              <>
                <button
                  type="button"
                  className="multiform-button"
                  onClick={handleBack}
                >
                  Back
                </button>
                <button
                  type="button"
                  className="multiform-button"
                  onClick={handleSubmitForm}
                >
                  Submit Form
                </button>
              </>
            )}
            {page === 4 && (
              <>
                <button
                  type="button"
                  className="multiform-button"
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
