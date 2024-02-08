import React from "react";
import IconOne from "../../assets/IconOne.svg";
import IconFour from "../../assets/IconFour.svg";
export const Summary = () => {
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
          <span className="application-summary_span">
            5 bags; clothes, which can be reused; children
          </span>
        </div>
        <div className="application-summary_iconSpan_whatsgiven_container">
          <img
            src={IconFour}
            alt="reuse"
            className="application-summary_icon"
          />
          <span className="application-summary_span">location: Warszawa</span>
        </div>
      </div>
      <div className="application-summary_both_containers">
        <div className="application-summary_left_container">
          <h3 className="application-summary_subheader">
            Enter the collection address:
          </h3>
          <div className="application-summary_small_container">
            <label
              htmlFor="application_summary_input_street"
              className="application-summary_label"
            >
              {" "}
              Street
            </label>
            <span className="application-summary_span">Niecała 9</span>
          </div>
          <div className="application-summary_small_container">
            <label
              htmlFor="application_summary_input_city"
              className="application-summary_label"
            >
              City
            </label>
            <span className="application-summary_span">Warszawa</span>
          </div>
          <div className="application-summary_small_container">
            <label className="application-summary_label"> Zip Code</label>
            <span className="application-summary_span">00-098</span>
          </div>
          <div className="application-summary_small_container">
            <label className="application-summary_label"> Phone number</label>
            <span className="application-summary_span">(+48) 502 202 222</span>
          </div>
        </div>
        <div className="application-summary_right_container">
          <h3 className="application-summary_subheader">
            Enter the collection date:
          </h3>
          <div className="application-summary_small_container">
            <label className="application-summary_label"> Date</label>
            <span className="application-summary_span">05.05.2023</span>
          </div>
          <div className="application-summary_small_container">
            <label className="application-summary_label"> Time</label>
            <span className="application-summary_span">17:15</span>
          </div>
          <label className="application-summary_label">
            {" "}
            Additional information for the courier :
          </label>
          <span className="application-summary_info_span">
            Please, call when you arrive at the street. I will ask my husband to
            help you pack the bags to the car.{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Summary;
