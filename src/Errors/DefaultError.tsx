import React from "react";
import "./errors.scss";
// import Decoration from "../assets/";
import { LuServerCrash } from "react-icons/lu";

const DefaultError = () => {
  return (
    <div className="error-container">
      <div className="error-smaller_container">
        {/* <div className="error-icon_container">
          <LuServerCrash className="error-icon" />
        </div> */}
        <h1 className="error-title">Sorry, somethig went wrong</h1>
        <div className="donate-text_decoration">
          {/* <img src={Decoration} alt="box" className="donate-decoration_image" /> */}
        </div>
      </div>
    </div>
  );
};

export default DefaultError;
