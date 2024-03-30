import { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./SASS/AuthStyles.scss";
import Decoration from "../../assets/Decoration.svg";

const SignOut: FC = () => {
  const navigate = useNavigate();
  const handleClick = (): void => {
    navigate("/");
  };
  return (
    <div className="auth-container">
      <h1 className="header-text">Sign out conducted successfully!</h1>
      <img src={Decoration} alt="" className="header-decoration" />
      <div className="auth-button_container">
        <button onClick={handleClick} type="button" className="auth-button">
          Home page
        </button>
      </div>
    </div>
  );
};

export default SignOut;
