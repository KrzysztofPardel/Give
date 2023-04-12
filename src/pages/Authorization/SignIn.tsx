import { useState, FC } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
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
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/home");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  const handleSignIn = (): void => {
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
        <label className="signIn-label" htmlFor="emailInputSignIn">
          Email
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="myemail@gmail.com"
          className="signIn-input"
          id="emailInputSignIn"
        />
        <label className="signIn-label" htmlFor="passwordInputSignUp">
          Hasło
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="signIn-input"
          id="passwordInputSignUp"
        />
      </form>
      <div className="signIn-button_container">
        {/* <button type="button" className="signIn-button">
          Sign Up
        </button> */}
        <button onClick={handleSubmit} type="button" className="signIn-button">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignIn;
