import "./SCSS/WhoWeHelp.scss";
import Decoration from "../../assets/Decoration.svg";

const WhoWeHelp = () => {
  return (
    <div id="help" className="who-background">
      <div className="who-container">
        <div className="who-text-container">
          <h1 className="who-header">Who do we help?</h1>
          <img src={Decoration} alt="box" className="who-decoration_image" />

          <div className="who-button_container">
            <button type="button" className="who-button">
              Foundations
            </button>
            <button type="button" className="who-button">
              Non-governmental organizations
            </button>
            <button type="button" className="who-button">
              Local collections
            </button>
          </div>
          <p className="who-text_paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            repudiandae ea fugit qui pariatur illo repellat, eveniet blanditiis
            nemo ducimus. Possimus pariatur explicabo laudantium.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeHelp;
