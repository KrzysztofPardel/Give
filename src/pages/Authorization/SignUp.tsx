import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../Redux/regSlice";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import "./SASS/AuthStyles.scss";
import Decoration from "../../assets/Decoration.svg";
import * as Yup from "yup"; // Import Yup

const SignUp = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [repeatpassword, setRepeatPassword] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //validation shema
  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,3}$/, "Invalid email format")
      .min(5, "Email is too short")
      .max(30, "Email is too long")
      .required("Email is required"),
    password: Yup.string()
      .matches(/[A-Z]+/, "Password must contain at least one uppercase letter")
      .matches(/[0-9]+/, "Password must contain at least one number")
      .matches(
        /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/,
        "Password must contain at least one special character"
      )
      .required("Password is required"),
    repeatpassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Please repeat the password")
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      await schema.validate(
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
              Hasło
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
              Powtórz hasło
            </label>
            <input
              value={repeatpassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              type="password"
              className="data-input"
              id="repeatPasswordInputSignUp"
            />
          </div>
          {error && <p className="auth-error-message">{error}</p>}
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
