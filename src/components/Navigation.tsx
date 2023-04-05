import { Link, animateScroll as scroll } from "react-scroll";
import { useNavigate } from "react-router-dom";
import "./SCSS/Navigation.scss";

const Navigation = () => {
  const navigate = useNavigate();
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
  return (
    <div className="navigation-background">
      <div className="container">
        <div className="btn-container">
          <button onClick={handleSignIn} type="button" className="autho-btn">
            Sign In
          </button>
          <button onClick={handleSignUp} type="button" className="autho-btn">
            Sign Up
          </button>
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
