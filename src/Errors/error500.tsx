import React from "react";
import "./errors.scss";
import Decoration from "../assets/Decoration.svg";
import { LuServerCrash } from "react-icons/lu";

const Error500 = () => {
  return (
    <div className="error-container">
      <div className="error-smaller_container">
        {/* <div className="error-icon_container">
          <LuServerCrash className="error-icon" />
        </div> */}
        <h1 className="error-title">Error 500</h1>
        <div className="donate-text_decoration">
          <img src={Decoration} alt="box" className="donate-decoration_image" />
        </div>
        <p className="error-description">
          The server encountered an unexpected condition that prevented it from
          fulfilling the request.
        </p>
        <p className="error-hint">
          <span className="error-hint-b">HINT:</span>
          This is an internal server issue. While there's nothing you can do on
          your end, you may want to report the issue to the system administrator
          or support team for resolution.
        </p>
      </div>
    </div>
  );
};

export default Error500;
