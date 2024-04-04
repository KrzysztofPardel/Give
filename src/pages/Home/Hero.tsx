import { Link } from "react-router-dom";
//styles
import "./SCSS/Hero.scss";
import HeroImage from "../../assets/HeroImage.jpg";
import Decoration from "../../assets/Decoration.svg";
import { HashLink } from "react-router-hash-link";

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
            <HashLink to="/donate#donatehero">
              <button type="button" className="redirection-link">
                Donate things
              </button>
            </HashLink>
            <HashLink to="/organize#organizehero">
              <button type="button" className="redirection-link">
                Organize a collection
              </button>
            </HashLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
