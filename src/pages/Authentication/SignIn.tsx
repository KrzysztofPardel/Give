import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//styles
import "./SASS/AuthStyles.scss";
import Decoration from "../../assets/Decoration.svg";
//Redux
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../Redux/authSlice";
import { RootState } from "../../Redux/store";
import { initializeFromLocalStorage } from "../../Redux/authSlice";

//Firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

//validation
import * as Yup from "yup"; // Import Yup
import { schemaSignIn } from "./Validations";

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
      await schemaSignIn.validate({ email, password }, { abortEarly: false });
      const authResponse = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      dispatch(login({ email, password, uid: authResponse.user.uid }));
      console.log(JSON.parse(localStorage.getItem("user") || "null"));
      navigate("/");
      
    } catch (e: any) {
      if (e instanceof Yup.ValidationError) {
        const errors = e.inner.map((err: any) => err.message);
        setError(errors.join(", "));
      } else {
        setError(e.message);
      }
    }
  };

  // useEffect(() => {
  //   dispatch(initializeFromLocalStorage());
  // }, [dispatch]);

  return (
    <div className="auth-container">
      <h1 className="header-text">Sign in</h1>
      <img src={Decoration} alt="" className="header-decoration" />
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="form-inputs">
          <div className="form-input">
            <label className="data-label " htmlFor="emailInputSignIn">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="myemail@gmail.com"
              className="data-input"
              id="emailInputSignIn"
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
          {error && <p className="auth-error-message">{error}</p>}
        </div>
        <div className="auth-button_container">
          <button type="submit" className="auth-button">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
