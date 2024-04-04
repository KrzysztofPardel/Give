import "./SCSS/Hero.scss";
import DonateHeroImage from "../../assets/DonateHeroImage.jpg";
import Decoration from "../../assets/Decoration.svg";

const HERO_DIMONDS = [
  { number: 1, title: "Choose things" },
  { number: 2, title: "Pack them" },
  { number: 3, title: "Decide where you help" },
  { number: 4, title: "Order delivery" }
];
const DonateHero = () => {
  return (
    <div id="donatehero" className="donate-hero_background">
      <div className="donate-hero_container">
        <div className="donate-image_container">
          <img
            src={DonateHeroImage}
            alt="sweater"
            className="donate-hero_image"
          />
        </div>
        <div className="donate-text_container">
          <p className="donate-text_paragraph">Give to the needy</p>
          <p className="donate-text_paragraph">the things you don't need</p>
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
            {HERO_DIMONDS.map(({ number, title }) => {
              return (
                <div key={number} className="donate-diamond">
                  <div className="donate-number_diamond">{number}</div>
                  <p className="donate-text_diamond">{title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateHero;
