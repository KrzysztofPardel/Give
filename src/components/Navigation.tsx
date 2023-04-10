import { Link, animateScroll as scroll } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import "./SCSS/Navigation.scss";

const Navigation = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const handleDonate = () => {
    navigate("/donate");
  };
  const handleSignIn = () => {
    navigate("/signin");
  };
  const handleSignUp = () => {
    navigate("/signup");
  };
  const handleClick = () => {
    scroll.scrollTo("contact", {
      smooth: "easeInOutQuart",
      duration: 1500
    });
  };
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/signout");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className="navigation-background">
      <div className="container">
        <div className="btn-container">
          <p className="">Welcome: {user && user.email} </p>
          {user ? (
            <button onClick={handleDonate} type="button" className="autho-btn">
              Donate
            </button>
          ) : null}
          {user ? (
            <button onClick={handleLogout} type="button" className="autho-btn">
              Sign Out
            </button>
          ) : null}
          {user ? null : (
            <button onClick={handleSignIn} type="button" className="autho-btn">
              Sign In
            </button>
          )}
          {user ? null : (
            <button onClick={handleSignUp} type="button" className="autho-btn">
              Sign Up
            </button>
          )}
        </div>
        <div className="homepage-links_container">
          {/* <NavLink */}
          <Link
            // activeClass={({ isActive }) => isActive && "active"}
            to="/#contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="homepage-link"
          >
            Start
          </Link>
          <Link
            activeClass="active"
            to="steps"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="homepage-link"
          >
            What & Why?
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="homepage-link"
          >
            About Us
          </Link>
          <Link
            activeClass="active"
            to="help"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="homepage-link"
          >
            Foundation & Organization
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={handleClick}
            className="homepage-link"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
