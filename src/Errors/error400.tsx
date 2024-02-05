import React from "react";
import "./errors.scss";
import Decoration from "../assets/Decoration.svg";

const Error400 = () => {
  return (
    <div className="error-container">
      <div className="error-smaller_container">
        <h1 className="error-title">Error 400</h1>
        <div className="donate-text_decoration">
          <img src={Decoration} alt="box" className="donate-decoration_image" />
        </div>
        <p className="error-description">
          The server could not understand the request due to malformed syntax or
          invalid parameters.
        </p>
        <p className="error-hint">
          <span className="error-hint-b">HINT:</span>
          Check the data you're sending in the request. Ensure all required
          parameters are included and properly formatted.
        </p>
      </div>
    </div>
  );
};

export default Error400;
