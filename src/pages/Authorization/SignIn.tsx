import { useState } from "react";
import "./SASS/SignIn.scss";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../Redux/authSlice";
import { RootState } from "../../Redux/store";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import Decoration from "../../assets/Decoration.svg";

type SignIn = {
  id: number;
  email: string;
  password: string;
};

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  //Redux
  const authState = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      dispatch(login({ email, password }));
      navigate("/");
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <div className="signIn-container">
      <h1 className="signIn-header">Sign in</h1>
      <img src={Decoration} alt="" className="signIn-decoration" />
      <form className="signIn-form" onSubmit={handleSubmit}>
        <label className="signIn-label" htmlFor="emailInputSignIn">
          Email
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="myemail@gmail.com"
            className="signIn-input"
            id="emailInputSignIn"
          />
        </label>
        <label className="signIn-label" htmlFor="passwordInputSignUp">
          Hasło
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="signIn-input"
            id="passwordInputSignUp"
          />
        </label>
        <div className="signIn-button_container">
          <button type="submit" className="signIn-button">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
