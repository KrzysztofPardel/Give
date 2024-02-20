import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import "./SCSS/Navigation.scss";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Redux/authSlice";
import { RootState } from "../Redux/store";

const MENU_ITEMS = [
  { id: 1, item: "Start", to: "home" },
  { id: 2, item: "What & Why?", to: "steps" },
  { id: 3, item: "About us", to: "about" },
  { id: 4, item: "Foundations & Organizations", to: "help" },
  { id: 5, item: "Contact", to: "contact" }
];

const Navigation = () => {
  const [nav, setNav] = useState<boolean>(false);
  const navigate = useNavigate();

  //Redux
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  const handleSignout = async (e: any) => {
    try {
      await signOut(auth);
      dispatch(logout());
      navigate("/signout");
      console.log("You are logged out");
    } catch (e: any) {
      console.error("Error signing out", e.message);
    }
  };

  //TODO: -osobne komponent
  // make desktop navigation component
  // make mobile navigation component

  return (
    <div className="navigation-background">
      <div className="container">
        <div className="btn-container">
          {user ? (
            <p className="welcome-sign">Welcome: {user && user.email} </p>
          ) : null}
          {user ? (
            <button
              onClick={() => navigate("/donate")}
              type="button"
              className="autho-btn"
            >
              Donate
            </button>
          ) : null}
          {user ? (
            <button onClick={handleSignout} type="button" className="autho-btn">
              Sign Out
            </button>
          ) : null}
          {user ? null : (
            <button
              onClick={() => navigate("/signin")}
              type="button"
              className="autho-btn"
            >
              Sign In
            </button>
          )}
          {user ? null : (
            <button
              onClick={() => navigate("/signup")}
              type="button"
              className="autho-btn"
            >
              Sign Up
            </button>
          )}
        </div>
        <div className="homepage-links_container">
          {/* Menu Items*/}
          {MENU_ITEMS.map(({ id, item, to }) => (
            <Link
              key={id}
              activeClass="active"
              to={to}
              spy
              smooth
              duration={500}
              className="homepage-link"
            >
              {item}
            </Link>
          ))}
        </div>
        {/* Hamburger */}
        <div
          onClick={() => setNav(!nav)}
          onKeyDown={() => setNav(!nav)}
          role="button"
          tabIndex={0}
          className="mobile-navigation"
        >
          {nav ? (
            <AiOutlineClose className="mobile-icon_close" />
          ) : (
            <HiOutlineMenuAlt4 className="mobile-icon_hamburger" />
          )}
        </div>
        {/* Mobile menu */}
        <div
          onClick={() => setNav(!nav)}
          onKeyDown={() => setNav(!nav)}
          role="button"
          tabIndex={0}
          className={nav ? "mobile_NavShown" : "mobile_NavHidden"}
        >
          <div className="btn-container_mobile">
            {user ? <p className="">Welcome: {user && user.email} </p> : null}
            {user ? (
              <button
                onClick={() => navigate("/donate")}
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
                onClick={() => navigate("/signin")}
                type="button"
                className="autho-btn_mobile"
              >
                Sign In
              </button>
            )}
            {user ? null : (
              <button
                onClick={() => navigate("/signup")}
                type="button"
                className="autho-btn_mobile"
              >
                Sign Up
              </button>
            )}
          </div>
          <div className="homepage-links_container_mobile">
            {/* <NavLink */}
            {MENU_ITEMS.map(({ id, item, to }) => (
              <Link
                key={id}
                activeClass="active"
                to={to}
                spy
                smooth
                offset={-70}
                duration={500}
                className="homepage-link"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
