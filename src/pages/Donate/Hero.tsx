import "./SCSS/Hero.scss";
import DonateHeroImage from "../../assets/DonateHeroImage.jpg";
import Decoration from "../../assets/Decoration.svg";

const DonateHero = () => {
  return (
    <div id="start" className="donate-hero_background">
      <div className="donate-hero_container">
        <div className="donate-image_container">
          <img
            src={DonateHeroImage}
            alt="sweater"
            className="donate-hero_image"
          />
        </div>
        <div className="donate-text_container">
          <p className="donate-text_paragraph">
            Give things you no longer use to those who
          </p>
          <p className="donate-text_paragraph">NEED THEM</p>
          <div className="donate-text_decoration">
            <img
              src={Decoration}
              alt="box"
              className="donate-decoration_image"
            />
          </div>
          <p className="donate-text_paragraph_bottom">
            It takes 4 simple steps
          </p>
          <div className="donate-hero_diamond_container">
            <div className="donate-diamond">
              <div className="donate-number_diamond">1</div>
              <p className="donate-text_diamond">Choose things</p>
            </div>
            <div className="donate-diamond">
              <div className="donate-number_diamond">2</div>
              <p className="donate-text_diamond">Pack them</p>
            </div>
            <div className="donate-diamond">
              <div className="donate-number_diamond">3</div>
              <p className="donate-text_diamond">Decide where you help</p>
            </div>
            <div className="donate-diamond">
              <div className="donate-number_diamond">4</div>
              <p className="donate-text_diamond">Order delivery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateHero;
