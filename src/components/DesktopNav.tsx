import "./SCSS/DesktopNav.scss";
import { HashLink } from "react-router-hash-link";
import { MENU_ITEMS } from "./Navigation";
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

const DesktopNav = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  return (
    <nav className="desktopNav-container">
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
          <HashLink key={id} to={to} smooth className="homepage-link">
            {item}
          </HashLink>
        ))}
      </div>
    </nav>
  );
};

export default DesktopNav;
