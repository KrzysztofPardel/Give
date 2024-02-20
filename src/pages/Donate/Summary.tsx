import React from "react";
import IconOne from "../../assets/IconOne.svg";
import IconFour from "../../assets/IconFour.svg";
import { useSelector } from "react-redux";
// import { setSummary } from "../../Redux/formSlice";

export const Summary = () => {

  const formData = useSelector((state: any) => state.form);
  const { step1, step2, step3, step4 } = formData;

  return (
    <div className="application-summary_container">
      <h2 className="application-summary_header">
        The summary of your donation:
      </h2>
      <div className="application-summary_iconSpan_container">
        <div className="application-summary_iconSpan_whatsgiven_container">
          <img
            src={IconOne}
            alt="clothes"
            className="application-summary_icon"
          />
          {/* Data form Step 1 and Step 2 */}
          <span className="application-summary_span">
            {step1 &&
              `I donate ${step2.basAmount}' bags and I want to help by providing ${step1.typeOfHelp}`}
          </span>
        </div>
        <div className="application-summary_iconSpan_whatsgiven_container">
          <img
            src={IconFour}
            alt="reuse"
            className="application-summary_icon"
          />
          {/* Data from Step 3 */}
          <span className="application-summary_span">
            {step3 && `I desire to help people in ${step3.help}`}
            {step3.organization &&
              `In particular, I want to help ${step3.organization} foundation/ organization`}
          </span>
        </div>
      </div>
      <div className="application-summary_both_containers">
        {/* Data from Step 4 */}
        {step4 && (
          <>
            <div className="application-summary_left_container">
              <h3 className="application-summary_subheader">
                The collection address:
              </h3>

              <div className="application-summary_small_container">
                <label
                  htmlFor="application_summary_input_street"
                  className="application-summary_label"
                >
                  Street -
                </label>
                <span className="application-summary_span">
                  ${step4.street}
                </span>
              </div>
              <div className="application-summary_small_container">
                <label
                  htmlFor="application_summary_input_city"
                  className="application-summary_label"
                >
                  City -
                </label>
                <span className="application-summary_span">${step4.city}</span>
              </div>
              <div className="application-summary_small_container">
                <label className="application-summary_label">Zip Code -</label>
                <span className="application-summary_span">
                  ${step4.zipCode}
                </span>
              </div>
              <div className="application-summary_small_container">
                <label className="application-summary_label">
                  Phone number -
                </label>
                <span className="application-summary_span">${step4.phone}</span>
              </div>
            </div>
            <div className="application-summary_right_container">
              <h3 className="application-summary_subheader">
                Enter the collection date:
              </h3>
              <div className="application-summary_small_container">
                <label className="application-summary_label">Date -</label>
                <span className="application-summary_span">{step4.date}</span>
              </div>
              <div className="application-summary_small_container">
                <label className="application-summary_label">Time -</label>
                <span className="application-summary_span">{step4.time}</span>
              </div>
              <label className="application-summary_label">
                Additional information for the courier:
              </label>
              <span className="application-summary_info_span">
                ${step4.courietInfo}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Summary;
