import React from "react";
import "./errors.scss";
import Decoration from "../assets/Decoration.svg";

const Error405 = () => {
  return (
    <div className="error-container">
      <div className="error-smaller_container">
        <h1 className="error-title">Error 405</h1>
        <div className="donate-text_decoration">
          <img src={Decoration} alt="box" className="donate-decoration_image" />
        </div>
        <p className="error-description">
          The request method is not supported for the requested resource.
        </p>
        <p className="error-hint">
          <span className="error-hint-b">HINT:</span>
          Check the HTTP method used in your request. Ensure it aligns with the
          allowed methods for the specific endpoint.
        </p>
      </div>
    </div>
  );
};

export default Error405;
