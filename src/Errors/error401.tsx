import "./errors.scss";
import Decoration from "../assets/Decoration.svg";

const Error401 = () => {
  return (
    <div className="error-container">
      <div className="error-smaller_container">
        <h1 className="error-title">Error 401</h1>
        <div className="donate-text_decoration">
          <img src={Decoration} alt="box" className="donate-decoration_image" />
        </div>
        <p className="error-description">
          The request lacks valid authentication credentials or the provided
          credentials are insufficient.
        </p>
        <p className="error-hint">
          <span className="error-hint-b">HINT:</span>
          Verify that you are using the correct authentication credentials. If
          you don't have access, contact the system administrator.
        </p>
      </div>
    </div>
  );
};

export default Error401;
