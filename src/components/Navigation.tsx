import "./SCSS/Navigation.scss";
import { HashLink } from "react-router-hash-link";
//Hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//Redux
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Redux/store";
import { logout } from "../Redux/authSlice";
//database
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
//icons
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const MENU_ITEMS = [
  { id: 1, to: "/#start", item: "Start" },
  { id: 2, to: "/#steps", item: "What & Why?" },
  { id: 3, to: "/#about", item: "About us" },
  { id: 4, to: "/#help", item: "Foundations & Organizations" },
  { id: 5, to: "/#contact", item: "Contact" }
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
            <HashLink
              key={id}
              // activeClass="active"
              to={to}
              // spy
              smooth
              // duration={500}
              className="homepage-link"
            >
              {item}
            </HashLink>
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

        {/* 
        
        
        
        
        */}
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
            {/* {MENU_ITEMS.map(({ id, item, to }) => (
              <Link
                key={id}
                activeClass="active"
                to={to}
                spy
                smooth={true}
                offset={-70}
                duration={500}
                className="homepage-link"
              >
                {item}
              </Link>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
