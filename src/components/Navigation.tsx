import { Link } from "react-router-dom";
// import { FaBeer } from "react-icons/fa";
import "../SCSS/Navigation.scss";

const Navigation = () => {
  return (
    <div className="navigation-background">
      <div className="container">
        {/* <h1>Hello Navigation</h1> */}
        <div className="link-container">
          <Link to="/signin" className="link">
            Sign In
            {/* <FaBeer style={{ color: "#709dff" }} className="link" /> */}
          </Link>
          <Link to="/signup" className="link">
            Sign Up
            {/* <FaBeer style={{ color: "#709dff" }} className="link" /> */}
          </Link>
        </div>
        <div className="button-container">
          <button type="button" className="button">
            Start
          </button>
          <button type="button" className="button">
            What & Why?
          </button>
          <button type="button" className="button">
            About Us
          </button>
          <button type="button" className="button">
            Foundation & Organization
          </button>
          <button type="button" className="button">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
