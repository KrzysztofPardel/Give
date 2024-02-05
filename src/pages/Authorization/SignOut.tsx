import { FC } from "react";
import "./SASS/SignOut.scss";
import { useNavigate } from "react-router-dom";
import Decoration from "../../assets/Decoration.svg";

const SignOut: FC = () => {
  const navigate = useNavigate();
  const handleClick = (): void => {
    navigate("/");
  };
  return (
    <div className="signOut-container">
      <h1 className="signOut-header">Sign out conducted successfully!</h1>
      <img src={Decoration} alt="" className="signOut-decoration" />
      <div className="signOut-button_container">
        <button onClick={handleClick} type="button" className="signOut-button">
          Home page
        </button>
      </div>
    </div>
  );
};

export default SignOut;
