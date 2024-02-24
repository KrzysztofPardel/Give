import React from "react";
import { useSelector } from "react-redux";

export const Summary = () => {
  const formData = useSelector((state: any) => state.organize);
  const { step1, step2 } = formData;

  return (
    <div className="summary-main_container">
      <h2 className="summary_header">
        Orgaznizing a collection - your summary:
      </h2>
      <div className="summary-container">
        {/* Data form Step 1 */}
        <h3 className="personalData-header">Personal information:</h3>
        <div className="personalData-dataBox">
          <p className="personalData-p">Name:</p>
          <span className="data-span bold">
            {step1 && `${step1.name}`}
          </span>{" "}
        </div>
        <div className="personalData-dataBox">
          <p className="personalData-p">Last name:</p>
          <span className="data-span bold">
            {step1 && `${step1.lastName}`}
          </span>{" "}
        </div>
        <div className="personalData-dataBox">
          <p className="personalData-p">Phone:</p>
          <span className="data-span bold">
            {step1 && `${step1.phoneNumber}`}
          </span>{" "}
        </div>
        <div className="personalData-dataBox">
          <p className="personalData-p">My desire is to help:</p>
          <span className="data-span bold">
            {step1 && `${step1.kindofHelp}`}
          </span>{" "}
        </div>
      </div>

      {/* Data from Step 2 */}
      <div className="summary-container">
        <h3 className="personalData-header">Collection information:</h3>
        <div className="personalData-dataBox">
          <p className="personalData-p">Date</p>
          <span id="dataBox-street" className="data-span">
            {step2 && `${step2.date}`}
          </span>
        </div>
        <div className="personalData-dataBox">
          <p className="personalData-p">Time</p>
          <span className="data-span bold">{step2 && `${step2.time}`}</span>
        </div>
        <div className="personalData-dataBox">
          <p className="personalData-p">City</p>
          <span className="data-span bold">{step2 && `${step2.city}`}</span>
        </div>
        <div className="personalData-dataBox">
          <p className="personalData-p">Street</p>
          <span className="data-span bold">{step2 && `${step2.street}`}</span>
        </div>
      </div>
      <div className="personalData-side">
        <p className="personalData-p">Additional information:</p>
        <span className="data-span bold">{step2 && `${step2.addInfo}`}</span>
      </div>
    </div>
  );
};

export default Summary;
