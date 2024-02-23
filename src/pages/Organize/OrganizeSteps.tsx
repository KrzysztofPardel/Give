import { useNavigate } from "react-router-dom";
import "./SCSS/OrganizeSteps.scss";
import { LuFileSpreadsheet } from "react-icons/lu";
import { SlEvent } from "react-icons/sl";
import { FaHandHoldingHeart } from "react-icons/fa";
import Decoration from "../../assets/Decoration.svg";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../Redux/store";

const FOUR_ITEMS = [
  {
    id: 1,
    icon: <LuFileSpreadsheet />,
    header: "Register a collection",
    paragraph: "Fill out the form below."
  },
  {
    id: 2,
    icon: <SlEvent />,
    header: "Organize it",
    paragraph: "Have your big day!"
  },
  {
    id: 3,
    icon: <FaHandHoldingHeart />,
    header: "Pass donations to the needy",
    paragraph: "Help for those in your community."
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
    <div id="steps" className="organizeSteps-background">
      <div className="organizeSteps-container">
        <h1 className="organizeSteps-header">Just 3 easy steps</h1>
        <img
          src={Decoration}
          alt="box"
          className="organizeSteps-decoration_image"
        />

        <div className="organizeSteps-columns-container">
          {FOUR_ITEMS.map(({ id, icon, paragraph, header }) => (
            <div key={id} className="organizeSteps-single_column">
              <div className="organizeSteps-icon">{icon}</div>
              <h2 className="organizeSteps-text-header">{header}</h2>
              <p className="organize-paragraph">{paragraph}</p>
              <div className="organizeSteps-line" />
            </div>
          ))}
        </div>
        <div className="organizeSteps-bottom_container">
          <p className="bottom-container_paragraph">
            Would you like to donate things?
          </p>
          <button onClick={handleRedirect} type="button" className="button">
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default FourSteps;
