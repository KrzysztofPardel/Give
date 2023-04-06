import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SASS/SignUp.scss";
import Decoration from "../../assets/Decoration.svg";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatpassword, setRepeatPassword] = useState("");
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate("/signin");
  };
  const handleSignUp = () => {
    navigate("/signup");
    // sending a form
  };
  return (
    <div className="signUp-container">
      <h1 className="signUp-header">Sign Up</h1>
      <img src={Decoration} alt="" className="signIn-decoration"/>
      <form className="signUp-form">
        <label className="signUp-label">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="myemail@gmail.com"
          className="signUp-input"
        />
        <label className="signUp-label">Hasło</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="signUp-input"
        />
        <label className="signUp-label">Powtórz hasło</label>
        <input
          value={repeatpassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          type="password"
          className="signUp-input"
        />
      </form>
      <div className="signUp-button_container">
        <button onClick={handleSignUp} type="button" className="signUp-button">
          Sign Up
        </button>
        <button onClick={handleSignIn} type="button" className="signUp-button">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignUp;
