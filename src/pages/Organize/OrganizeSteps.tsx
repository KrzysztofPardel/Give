import { useNavigate } from "react-router-dom";
//styles
import "./SCSS/OrganizeSteps.scss";
// import { LuFileSpreadsheet } from "react-icons/lu";
import { FaHandHoldingHeart } from "react-icons/fa";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { BsCalendar2WeekFill } from "react-icons/bs";

import Decoration from "../../assets/Decoration.svg";
//Redux
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../Redux/store";

const THREE_ITEMS = [
  {
    id: 1,
    icon: <HiClipboardDocumentList />,
    header: "Register a collection",
    paragraph: "Fill out the form below."
  },
  {
    id: 2,
    icon: <BsCalendar2WeekFill />,
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

  return (
    <div id="" className="organizeSteps-background">
      <div className="organizeSteps-container">
        <div className="organizeSteps-container_header">
          <h1 className="organizeSteps-header">Only 3 steps away from it!</h1>
          <img
            src={Decoration}
            alt="box"
            className="organizeSteps-decoration_image"
          />
        </div>
        <div className="organizeSteps-columns-container">
          {THREE_ITEMS.map(({ id, icon, paragraph, header }) => (
            <div key={id} className="organizeSteps-single_column">
              <div className="organizeSteps-icon">{icon}</div>
              <h2 className="organizeSteps-text-header">{header}</h2>
              <p className="organize-paragraph">{paragraph}</p>
              <div className="organizeSteps-line" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FourSteps;
