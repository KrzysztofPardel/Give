import { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./SASS/SignOut.scss";
import Decoration from "../../assets/Decoration.svg";

// type UserCredencials = {
//   email: string;
//   password: string;
// }

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
