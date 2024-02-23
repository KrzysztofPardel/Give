import React from "react";
import { useSelector } from "react-redux";
export const Summary = () => {
  const formData = useSelector((state: any) => state.form);
  const { step1, step2 } = formData;

  return (
    <div className="summary-main_container">
      <h2 className="summary_header">
        Orgaznizing a collection - your summary:
      </h2>
      <div className="summary-container">
        <div className="container-personalData">
          {/* Data form Step 1 */}
          <h2 className="personalData-header">Personal information:</h2>
          <p className="personalData-p">
            Name:
            <span className="personalData-span bold">
              {step1 && `${step1.name}`}
            </span>{" "}
          </p>
          <p className="personalData-p">
            Last name:
            <span className="personalData-span bold">
              {step1 && `${step1.lastName}`}
            </span>{" "}
          </p>
          <p className="personalData-p">
            Phone:
            <span className="personalData-span bold">
              {step1 && `${step1.phoneNumber}`}
            </span>{" "}
          </p>

          <span className="personalData-span">
            My desire is to help:
            <span className="personalData-span bold">
              {step1 && `${step1.kindofHelp}`}
            </span>{" "}
            .
          </span>
        </div>
      </div>
      <div className="summary-collectionData">
        {/* Data from Step 2 */}

        <div className="summary-side">
          <h3 className="side-header">Collection information:</h3>
          <div className="side-dataBox">
            <p className="personalData-p">
              Date
              <span id="dataBox-street" className="collcectionData-span">
                {step2 && `${step2.date}`}
              </span>
            </p>
          </div>
          <p className="personalData-p">
            Time
            <span className="collcectionData-span">
              {step2 && `${step2.time}`}
            </span>
          </p>
          <p className="personalData-p">
            City
            <span className="collcectionData-span">
              {step2 && `${step2.city}`}
            </span>
          </p>
          <p className="personalData-p">
            Street
            <span className="collcectionData-span">
              {step2 && `${step2.street}`}
            </span>
          </p>
        </div>
        <div className="summary-side">
          <p className="personalData-p">
            Additional information:
            <span className="collcectionData-span">
              {step2 && `${step2.addInfo}`}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
