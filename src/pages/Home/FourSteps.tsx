import { useNavigate } from "react-router-dom";

import "./SCSS/FourSteps.scss";
import IconOne from "../../assets/IconOne.svg";
import IconTwo from "../../assets/IconTwo.svg";
import IconThree from "../../assets/IconThree.svg";
import IconFour from "../../assets/IconFour.svg";
import Decoration from "../../assets/Decoration.svg";

const FourSteps = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/signin");
  };
  return (
    <div id="steps" className="four-background">
      <div className="four-container">
        <h1 className="four-header">It takes 4 simple steps</h1>
        <img src={Decoration} alt="box" className="decoration-image" />

        <div className="four-columns-container">
          <div className="four-single_column">
            <img src={IconOne} alt="shirt" className="four-text_icon" />
            <h2 className="four-text-header">Choose things</h2>
            <div className="line" />
            <p className="four-text-paragraph">
              clothes, toys, devices and others
            </p>
          </div>
          <div className="four-single_column">
            <img src={IconTwo} alt="bag" className="four-text_icon" />
            <h2 className="four-text-header">Pack them</h2>
            <div className="line" />
            <p className="four-text-paragraph">use trash bags</p>
          </div>
          <div className="four-single_column">
            <img
              src={IconThree}
              alt="magnifying glass"
              className="four-text_icon"
            />
            <h2 className="four-text-header">Decide where you help</h2>
            <div className="line" />
            <p className="four-text-paragraph">choose a trusted place</p>
          </div>
          <div className="four-single_column">
            <img src={IconFour} alt="arrow loop" className="four-text_icon" />
            <h2 className="four-text-header">Order delivery</h2>
            <div className="line" />
            <p className="four-text-paragraph">
              courier will arrive when convenient
            </p>
          </div>
        </div>
        <button onClick={handleClick} type="button" className="button">
          Donate
        </button>
      </div>
    </div>
  );
};

export default FourSteps;
