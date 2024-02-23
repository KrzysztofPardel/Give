import { useNavigate } from "react-router-dom";
import "./SCSS/Hero.scss";
import HeroImage from "../../assets/HeroImage.jpg";
import Decoration from "../../assets/Decoration.svg";
import { Link } from "react-router-dom";
// import { UserAuth } from "../../context/AuthContext";

const Hero = () => {
  return (
    <div id="start" className="hero-background">
      <div className="hero-container">
        <div className="image-container">
          <img src={HeroImage} alt="box" className="hero-image" />
        </div>
        <div className="text-container">
          <p className="text-paragraph main">Start helping</p>
          <p className="text-paragraph">
            Let someone enjoy what you don’t need.
          </p>
          <div className="text-decoration">
            <img src={Decoration} alt="box" className="decoration-image" />
          </div>
          <div className="hero-button_container">
            <Link to={"/donate"}>
              <button type="button" className="button">
                Donate things
              </button>
            </Link>
            <Link to={"/organize"}>
              <button type="button" className="button">
                Organize a collection
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
