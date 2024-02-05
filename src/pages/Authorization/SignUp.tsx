import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { UserAuth } from "../../context/AuthContext";
import "./SASS/SignUp.scss";
import Decoration from "../../assets/Decoration.svg";
import { useDispatch } from "react-redux";
import { registerUser } from "../../Redux/regSlice";

const SignUp = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [repeatpassword, setRepeatPassword] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    try {
      // dispatch the registerUser action with email and password
      dispatch(registerUser({ email, password }));
      navigate("/");
    } catch (e: any) {
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
        <div className="signUp-button_container">
          <button type="submit" className="signUp-button">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
