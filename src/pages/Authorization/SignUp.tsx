import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import "./SASS/SignUp.scss";
import Decoration from "../../assets/Decoration.svg";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [repeatpassword, setRepeatPassword] = useState("");
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSignIn = (): void => {
    navigate("/signin");
  };
  const handleSignUp = (): void => {
    navigate("/signup");
    // sending a form
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/home");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };
  return (
    <div className="signUp-container">
      <h1 className="signUp-header">Sign Up</h1>
      <img src={Decoration} alt="" className="signIn-decoration" />
      <form onSubmit={handleSubmit} className="signUp-form">
        <label className="signUp-label" htmlFor="emailInputSignUp">
          Email
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="myemail@gmail.com"
            className="signUp-input"
            id="emailInputSignUp"
          />
        </label>
        <label className="signUp-label" htmlFor="passwordInputSignUp">
          Hasło
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="signUp-input"
            id="passwordInputSignUp"
          />
        </label>

        <label className="signUp-label" htmlFor="repeatPasswordInputSignUp">
          Powtórz hasło
          <input
            value={repeatpassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            type="password"
            className="signUp-input"
            id="repeatPasswordInputSignUp"
          />
        </label>
      </form>
      <div className="signUp-button_container">
        <button onClick={handleSubmit} type="button" className="signUp-button">
          Sign Up
        </button>
        {/* <button onClick={handleSignIn} type="button" className="signUp-button">
          Sign In
        </button> */}
      </div>
    </div>
  );
};

export default SignUp;
