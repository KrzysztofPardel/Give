import "./errors.scss";
import Decoration from "../assets/Decoration.svg";

interface ErrorTypes {
  type: number;
  description: string;
  hint: string;
}

const Error = ({ type, description, hint }: ErrorTypes) => {
  return (
    <div className="error-container">
      <div className="error-smaller_container">
        <h1 className="error-title">Error {type}</h1>
        <div className="donate-text_decoration">
          <img src={Decoration} alt="box" className="donate-decoration_image" />
        </div>
        <p className="error-description">{description}</p>
        <p className="error-hint">
          <span className="error-hint-b">HINT:</span>
          {hint}
        </p>
      </div>
    </div>
  );
};

export default Error;
