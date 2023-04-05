import { useState, FC } from "react";
import { useNavigate } from "react-router-dom";
import "./SASS/SignIn.scss";
import Decoration from "../../assets/Decoration.svg";

// type UserCredencials = {
//   email: string;
//   password: string;
// }

const SignIn: FC = () => {
  // const [email, setEmail] = useState<>("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/signin");
    //logging in to the homepage
  };
  const handleSignUp = (): void => {
    navigate("/signup");
  };
  return (
    <div className="signIn-container">
      <h1 className="signIn-header">Sign in</h1>
      <img src={Decoration} alt="" className="signIn-decoration" />
      <form className="signIn-form">
        <label for="email" className="signIn-label">
          Email
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="email"
          placeholder="myemail@gmail.com"
          className="signIn-input"
        />
        <label className="signIn-label">Hasło</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="signIn-input"
        />
      </form>
      <div className="signIn-button_container">
        <button type="button" className="signIn-button">
          Sign Up
        </button>
        <button type="button" className="signIn-button">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignIn;
