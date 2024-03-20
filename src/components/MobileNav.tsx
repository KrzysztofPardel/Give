import "./SCSS/Navigation.scss";
import { HashLink } from "react-router-hash-link";
import { MENU_ITEMS } from "./Navigation";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
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

const MobileNav = () => {
  const [nav, setNav] = useState<boolean>(false);
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
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="mobileNav-container">
      {/* hidden */}
      <div
        onClick={handleNav}
        onKeyDown={handleNav}
        className="mobileNav-hamburger"
      >
        {nav ? (
          <RxCross2 className="hamburger-icon" />
        ) : (
          <RxHamburgerMenu className="hamburger-icon" />
        )}
      </div>
      {/* revealed */}
      <div className={nav ? "mobileNav" : "mobileNav hidden"}>
        <div className="btn-container_mobile">
          {user ? (
            <p className="mobile-userEmail">Welcome: {user && user.email} </p>
          ) : null}
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
          {MENU_ITEMS.map(({ id, item, to }) => (
            <HashLink key={id} to={to} smooth className="homepage-link_mobile">
              {item}
            </HashLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
