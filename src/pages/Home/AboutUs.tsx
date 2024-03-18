import "./SCSS/AboutUs.scss";
import Decoration from "../../assets/Decoration.svg";
import People from "../../assets/People.jpg";
import Signature from "../../assets/Signature.svg";

const AboutUs = () => {
  return (
    <div id="about" className="about-background">
      <div className="about-container">
        <div className="about-container_text">
          <h1 className="about-text_header">About us</h1>
          <img src={Decoration} alt="box" className="about-decoration_image" />
          <p className="about-text_paragraph">
            We are vibrant group of individuals who decided to join hands in
            helping those in need. Most of us some were less privileged in life,
            therefore we understand the challenges of the people we help. Our
            hearts’ burden is to enable them to start a new chapter in their
            lives, to live lives that many of us would call normal or average
            and later go beyond that. Surprisingly it takes only few steps and a
            piece of determination to make someone smile and say “Thank you!”.
          </p>
          <img src={Signature} alt="signature" className="signature" />
        </div>
        <div className="about-container_image">
          <img src={People} alt="group of people" className="about-image" />
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
