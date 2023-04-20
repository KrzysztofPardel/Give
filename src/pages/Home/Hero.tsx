import { useNavigate } from "react-router-dom";
import "./SCSS/Hero.scss";
import HeroImage from "../../assets/HeroImage.jpg";
import Decoration from "../../assets/Decoration.svg";
import { UserAuth } from "../../context/AuthContext";

const Hero = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const handleClick = () => {
    if (user) {
      navigate("/donate");
    } else if (user === null) {
      navigate("/");
    }
  };
  return (
    <div id="start" className="hero-background">
      <div className="hero-container">
        <div className="image-container">
          <img src={HeroImage} alt="box" className="hero-image" />
        </div>
        <div className="text-container">
          <p className="text-paragraph">Start helping!</p>
          <p className="text-paragraph">
            Let someone enjoy what you don’t need.
          </p>
          <div className="text-decoration">
            <img src={Decoration} alt="box" className="decoration-image" />
          </div>
          <div className="hero-button_container">
            <button onClick={handleClick} type="button" className="button">
              Donate things
            </button>
            <button onClick={handleClick} type="button" className="button">
              Organize a collection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
