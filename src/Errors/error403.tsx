import "./errors.scss";
import Decoration from "../assets/Decoration.svg";

const Error403 = () => {
  return (
    <div className="error-container">
      <div className="error-smaller_container">
        <h1 className="error-title">Error 403</h1>
        <div className="donate-text_decoration">
          <img src={Decoration} alt="box" className="donate-decoration_image" />
        </div>
        <p className="error-description">
          The server understood the request, but you do not have the necessary
          permissions to access the requested resource.
        </p>
        <p className="error-hint">
          <span className="error-hint-b">HINT:</span>
          Make sure you have the appropriate permissions for the requested
          action. If the issue persists, contact the system administrator.
        </p>
      </div>
    </div>
  );
};

export default Error403;
