import { useState } from "react";
import { useNavigate } from "react-router-dom";
//components
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import Summary from "./Summary";
import Appreciation from "./Appreciation";
//styles
import "./SCSS/Multiform.scss";
import "./SCSS/Steps.scss";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { resetForm } from "../../Redux/organizeSlice";
import { RootState } from "../../Redux/store";

//Firebase
import { dbMultiformOrganize } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

const Multiform = () => {
  const navigate = useNavigate();
  //Redux
  const dispatch = useDispatch();
  const formData = useSelector((state: any) => state.form);
  const user = useSelector((state: RootState) => state.auth.user);

  // const { step1, step2 } = formData;
  const [page, setPage] = useState<number>(1);
  const [collectionsCounter, setCollectionsCounter] = useState<number>(0);

  //redirection Donate website
  const handleRedirect = () => {
    if (user) {
      navigate("/donate");
    } else {
      navigate("/signin");
    }
  };

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
            Fill out the details concerning collection you want to organize.
          </p>
        </div>

        <div className="multiform-container_bottom">
          <p className="multiform-steps">{page !== 4 && `Step ${page} / 3`}</p>
          <div className="multiform-steps_container">
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
        <div className="organizeSteps-bottom_container">
          <p className="bottom-container_paragraph">
            Would you like to donate things?
          </p>
          <button onClick={handleRedirect} type="button" className="button">
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Multiform;
