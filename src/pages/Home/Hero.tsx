import "./SCSS/Hero.scss";
import HeroImage from "../../assets/HeroImage.jpg";
import Decoration from "../../assets/Decoration.svg";

const Hero = () => {
  return (
    <div className="hero-background">
      <div className="hero-container">
        <div className="image-container">
          <img src={HeroImage} alt="box" className="hero-image" />
        </div>
        <div className="text-container">
          <p className="text-paragraph">Start helping!</p>
          <p className="text-paragraph">
            Let someone enjoy what you don't need.
          </p>
          <div className="text-decoration">
            <img src={Decoration} alt="box" className="decoration-image" />
          </div>
          <div className="hero-button_container">
            <button type="button" className="button">
              Donate things
            </button>
            <button type="button" className="button">
              Organize a collection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
