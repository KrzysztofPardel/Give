import { useSelector } from "react-redux";
import IconOne from "../../assets/IconOne.svg";
import IconFour from "../../assets/IconFour.svg";

export const Summary = () => {
  const formData = useSelector((state: any) => state.form);
  const { step1, step2, step3, step4 } = formData;

  return (
    <div className="stepDonate_container">
      <h2 className="stepDonate-summary_header">
        The summary of your donation:
      </h2>
      <div className="stepDonate-summary_iconSpan_container">
        <div className="stepDonate-summary_iconSpan_whatsgiven_container">
          <img
            src={IconOne}
            alt="clothes"
            className="stepDonate-summary_icon"
          />
          {/* Data form Step 1 and Step 2 */}
          <span className="stepDonate-summary_span">
            I donate{" "}
            <span className="summary-span_bold">
              {step1 && `${step2.bagsAmount}`}
            </span>{" "}
            bag(s)
            {""} and I want to help by providing{" "}
            <span className="summary-span_bold">
              {step1 && ` ${step1.typeOfHelp}`}
            </span>{" "}
            .
          </span>
        </div>
        <div className="stepDonate-summary_iconSpan_whatsgiven_container">
          <img src={IconFour} alt="reuse" className="stepDonate-summary_icon" />
          {/* Data from Step 3 */}
          <span className="stepDonate-summary_span">
            I desire to help people in{" "}
            <span className="summary-span_bold">
              {step3 && ` ${step3.help}`}{" "}
            </span>
            and I'm going to help this particular foundation/ organization -
            <span className="summary-span_bold">
              {step3.organization && ` ${step3.organization}`}
            </span>
          </span>
        </div>
      </div>
      <div className="stepDonate-summary_both_containers">
        {/* Data from Step 4 */}
        {step4 && (
          <>
            <div className="stepDonate-summary_left_container">
              <h3 className="stepDonate-summary_subheader">
                The collection address:
              </h3>

              <div className="stepDonate-summary_small_container">
                <label
                  htmlFor="application_summary_input_street"
                  className="stepDonate-summary_label"
                >
                  Street
                </label>
                <span className="stepDonate-summary_span">
                  {step4 && `${step4.address}`}
                </span>
              </div>
              <div className="stepDonate-summary_small_container">
                <label
                  htmlFor="application_summary_input_city"
                  className="stepDonate-summary_label"
                >
                  City
                </label>
                <span className="stepDonate-summary_span">
                  {step4 && `${step4.city}`}
                </span>
              </div>
              <div className="stepDonate-summary_small_container">
                <label className="stepDonate-summary_label">Zip Code</label>
                <span className="stepDonate-summary_span">
                  {step4 && `${step4.zipCode}`}
                </span>
              </div>
              <div className="stepDonate-summary_small_container">
                <label className="stepDonate-summary_label">Phone number</label>
                <span className="stepDonate-summary_span">
                  {step4 && `${step4.phone}`}
                </span>
              </div>
            </div>
            <div className="stepDonate-summary_right_container">
              <h3 className="stepDonate-summary_subheader">
                Enter the collection date:
              </h3>
              <div className="stepDonate-summary_small_container">
                <label className="stepDonate-summary_label">Date</label>
                <span className="stepDonate-summary_span">
                  {step4 && `${step4.date}`}
                </span>
              </div>
              <div className="stepDonate-summary_small_container">
                <label className="stepDonate-summary_label">Time</label>
                <span className="stepDonate-summary_span">
                  {step4 && `${step4.time}`}
                </span>
              </div>
              <label className="stepDonate-summary_label">
                Additional information for the courier:
              </label>
              <span className="stepDonate-summary_info_span">
                {step4 && `${step4.courierInfo}`}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Summary;
