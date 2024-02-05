import { useNavigate } from "react-router-dom";
import "./SCSS/FourSteps.scss";
import IconOne from "../../assets/IconOne.svg";
import IconTwo from "../../assets/IconTwo.svg";
import IconThree from "../../assets/IconThree.svg";
import IconFour from "../../assets/IconFour.svg";
import Decoration from "../../assets/Decoration.svg";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../Redux/store";

const FOUR_ITEMS = [
  {
    id: 1,
    img: IconOne,
    alt: "shirt",
    header: "Choose things",
    paragraph: "Clothes, toys, devices and others."
  },
  {
    id: 2,
    img: IconTwo,
    alt: "bag",
    header: "Use trash bags",
    paragraph: "Clothes, toys, devices and others."
  },
  {
    id: 3,
    img: IconThree,
    alt: "magnifying glass",
    header: "Decide where you help",
    paragraph: "Choose a trusted place."
  },
  {
    id: 4,
    img: IconFour,
    alt: "arrow loop",
    header: "Order delivery",
    paragraph: "Courier will arrive when convenient."
  }
];

const FourSteps = () => {
  const navigate = useNavigate();

  //Redux
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  const handleRedirect = () => {
    if (user) {
      navigate("/donate");
    } else {
      navigate("/signin");
    }
  };

  return (
    <div id="steps" className="four-background">
      <div className="four-container">
        <h1 className="four-header">It takes 4 simple steps</h1>
        <img src={Decoration} alt="box" className="four-decoration_image" />

        <div className="four-columns-container">
          {FOUR_ITEMS.map(({ id, img, alt, header, paragraph }) => (
            <div key={id} className="four-single_column">
              <img src={img} alt={alt} className="four-text_icon" />
              <h2 className="four-text-header">{header}</h2>
              <div className="line" />
              <p className="four-text-paragraph">{paragraph}</p>
            </div>
          ))}
        </div>
        <button onClick={handleRedirect} type="button" className="button">
          Donate
        </button>
      </div>
    </div>
  );
};

export default FourSteps;
