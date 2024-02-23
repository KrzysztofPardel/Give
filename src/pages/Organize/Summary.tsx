import React from "react";
import IconOne from "../../assets/IconOne.svg";
import IconFour from "../../assets/IconFour.svg";
import { useSelector } from "react-redux";
// import { setSummary } from "../../Redux/formSlice";

export const Summary = () => {
  const formData = useSelector((state: any) => state.form);
  const { step1, step2, step3, step4 } = formData;

  return (
    <div className="summary-main_container">
      <h2 className="summary_header">
        Orgaznizing a collection - your summary:
      </h2>
      <div className="summary-container">
        <div className="container-personalData">
          {/* Data form Step 1 and Step 2 */}
          <h2 className="personalData-header">Personal Details:</h2>
          <p className="personalData-p">
            Name:
            <span className="personalData-span bold">
              {/* {step1 && `${step2.bagsAmount}`} */}
            </span>{" "}
          </p>
          <p className="personalData-p">
            Last name:
            <span className="personalData-span bold">
              {/* {step1 && `${step2.bagsAmount}`} */}
            </span>{" "}
          </p>
          <p className="personalData-p">
            Phone:
            <span className="personalData-span bold">
              {/* {step1 && `${step2.bagsAmount}`} */}
            </span>{" "}
          </p>

          <span className="personalData-span">
            bag(s)
            {""} and I want to help by providing{" "}
            <span className="personalData-span bold">
              {/* {step1 && ` ${step1.typeOfHelp}`} */}
            </span>{" "}
            .
          </span>
        </div>
        <div className="container-personalData">
          {/* Data from Step 3 */}
          <span className="personalData-span">
            I desire to help people in{" "}
            <span className="personalData-span bold">
              {/* {step3 && ` ${step3.help}`}{" "} */}
            </span>
            and I'm going to help this particular foundation/ organization -
            <span className="personalData-span bold">
              {/* {step3?.organization && ` ${step3.organization}`} */}
            </span>
          </span>
        </div>
      </div>
      <div className="summary-collectionData">
        {/* Data from Step 4 */}
        {step4 && (
          <>
            <div className="summary-side">
              <h3 className="side-header">The collection address:</h3>
              <div className="side-dataBox">
                <label className="dataBox-label">Street</label>
                <span id="dataBox-street" className="collcectionData-span">
                  {/* {step4 && `${step4.address}`} */}
                </span>
              </div>
              <div className="side-dataBox">
                <label className="dataBox-label">City</label>
                <span className="collcectionData-span">
                  {/* {step4 && `${step4.city}`} */}
                </span>
              </div>
              <div className="side-dataBox">
                <label className="dataBox-label">Zip Code</label>
                <span className="collcectionData-span">
                  {/* {step4 && `${step4.zipCode}`} */}
                </span>
              </div>
              <div className="side-dataBox">
                <label className="dataBox-label">Phone number</label>
                <span className="collcectionData-span">
                  {/* {step4 && `${step4.phone}`} */}
                </span>
              </div>
            </div>
            <div className="summary-side">
              <h3 className="side-header">Enter the collection date:</h3>
              <div className="side-dataBox">
                <label className="dataBox-label">Date</label>
                <span className="collcectionData-span">
                  {/* {step4 && `${step4.date}`} */}
                </span>
              </div>
              <div className="side-dataBox">
                <label className="dataBox-label">Time</label>
                <span className="collcectionData-span">
                  {/* {step4 && `${step4.time}`} */}
                </span>
              </div>
              <label className="dataBox-label">
                Additional information for the courier:
              </label>
              <span className="collcectionData-span">
                {/* {step4 && `${step4.courierInfo}`} */}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Summary;
