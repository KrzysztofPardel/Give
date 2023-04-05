import "./SCSS/Footer.scss";
import { Link } from "react-router-dom";

import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer-icons_container">
        <Link to="https://www.facebook.com/" className="footer-icon">
          <AiFillFacebook />
        </Link>
        <Link to="https://www.instagram.com/" className="footer-icon">
          <AiFillInstagram />
        </Link>
        <Link to="https://www.pinterest.com/" className="footer-icon">
          <BsPinterest />
        </Link>
      </div>
      <p className="footer-copyrights">©Copyright by Coders Lab</p>
    </div>
  );
};

export default Footer;
<Link to="/signin" className="footer-icon">
  <AiFillFacebook />
</Link>;
