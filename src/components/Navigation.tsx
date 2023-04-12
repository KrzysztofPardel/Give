import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import "./SCSS/Navigation.scss";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const Navigation = () => {
  const { user, logout } = UserAuth();
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  const handleDonate = () => {
    navigate("/donate");
  };
  const handleSignIn = () => {
    navigate("/");
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
  const handleSignout = async () => {
    try {
      await logout();
      navigate("/signout");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="navigation-background">
      <div className="container">
        <div className="btn-container">
          {user ? <p className="">Welcome: {user && user.email} </p> : null}
          {user ? (
            <button onClick={handleDonate} type="button" className="autho-btn">
              Donate
            </button>
          ) : null}
          {user ? (
            <button onClick={handleSignout} type="button" className="autho-btn">
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
        {/* Hamburger */}
        <div onClick={handleNav} className="mobile-navigation">
          {nav ? (
            <AiOutlineClose className="mobile-icon_close" />
          ) : (
            <HiOutlineMenuAlt4 className="mobile-icon_hamburger" />
          )}
        </div>
        {/* Mobile menu */}
        <div
          onClick={handleNav}
          className={nav ? "mobile_NavShown" : "mobile_NavHidden"}
        >
          <div className="btn-container_mobile">
            {user ? <p className="">Welcome: {user && user.email} </p> : null}
            {user ? (
              <button
                onClick={handleDonate}
                type="button"
                className="autho-btn_mobile"
              >
                Donate
              </button>
            ) : null}
            {user ? (
              <button
                onClick={handleSignout}
                type="button"
                className="autho-btn_mobile"
              >
                Sign Out
              </button>
            ) : null}
            {user ? null : (
              <button
                onClick={handleSignIn}
                type="button"
                className="autho-btn_mobile"
              >
                Sign In
              </button>
            )}
            {user ? null : (
              <button
                onClick={handleSignUp}
                type="button"
                className="autho-btn_mobile"
              >
                Sign Up
              </button>
            )}
          </div>
          <div className="homepage-links_container_mobile">
            {/* <NavLink */}
            <Link
              // activeClass={({ isActive }) => isActive && "active"}
              to="/#contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="homepage-link_mobile "
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
              className="homepage-link_mobile "
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
              className="homepage-link_mobile "
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
              className="homepage-link_mobile "
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
              className="homepage-link_mobile "
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
