import { useNavigate } from "react-router-dom";
import "../Home/Hero";
import HeroImage from "../../assets/HeroImage.jpg";
import Decoration from "../../assets/Decoration.svg";

import { Link } from "react-router-dom";
// import { UserAuth } from "../../context/AuthContext";

const Hero = () => {
  return (
    <div id="" className="hero-background">
      <div className="hero-container">
        <div className="image-container">
          <img src={HeroImage} alt="box" className="hero-image" />
        </div>
        <div className="text-container">
          <p className="text-paragraph main">Organize a collection</p>
          <p className="text-paragraph">Be a host of a collection</p>
          <div className="text-decoration">
            <img src={Decoration} alt="box" className="decoration-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
