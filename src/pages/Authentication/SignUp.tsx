import { useState } from "react";
import { useNavigate } from "react-router-dom";
//styles
import "./SASS/AuthStyles.scss";
import Decoration from "../../assets/Decoration.svg";
//Redux
import { useDispatch } from "react-redux";
import { registerUser } from "../../Redux/regSlice";
//Firebase
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
//validation
import * as Yup from "yup"; // Import Yup
import { schemaSignUp } from "./Validations";
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
      await schemaSignUp.validate(
        { email, password, repeatpassword },
        { abortEarly: false }
      );
      // dispatch the registerUser action with email and password
      await createUserWithEmailAndPassword(auth, email, password);
      dispatch(registerUser({ email, password }));
      navigate("/");
    } catch (e: any) {
      if (e instanceof Yup.ValidationError) {
        const errors = e.inner.map((err: any) => err.message);
        setError(errors.join(", "));
      } else {
        setError(e.messgage);
      }
    }
  };

  return (
    <div className="auth-container ">
      <h1 className="header-text">Sign Up</h1>
      <img src={Decoration} alt="" className="header-decoration" />
      <form onSubmit={handleSubmit} className="auth-form prolonged">
        <div className="form-inputs">
          <div className="form-input">
            <label className="data-label" htmlFor="emailInputSignUp">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="myemail@gmail.com"
              className="data-input"
              id="emailInputSignUp"
            />
          </div>
          <div className="form-input">
            <label className="data-label" htmlFor="passwordInputSignUp">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="data-input"
              id="passwordInputSignUp"
            />
          </div>
          <div className="form-input">
            <label className="data-label" htmlFor="repeatPasswordInputSignUp">
              Repeat password
            </label>
            <input
              value={repeatpassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              type="password"
              className="data-input"
              id="repeatPasswordInputSignUp"
            />
          </div>
          <div className="auth-error_message_container">
            {error && <p className="error_message">{error}</p>}
          </div>
        </div>
        <div className="auth-button_container">
          <button type="submit" className="auth-button">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
