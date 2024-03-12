import "./SCSS/ThreeColumns.scss";
//Redux
import { useSelector } from "react-redux";
import { RootState } from "Redux/store";

const ThreeColumns = () => {
  const donationsCounter = useSelector(
    (state: RootState) => state.dataCounter.counter
  );

  return (
    <div id="start" className="three-background">
      <div className="three-columns-container">
        <div className="three-single_column">
          <div className="three-text-number">10</div>
          <h1 className="three-text-header">Bags donated recently</h1>
          <p className="three-text-paragraph">
            {" "}
            `Thanks to your generous donations we were able to distribute ${10}
            large bags full of previously enjoyed things to those who would not
            be able to afford themselves. We wish you could see their joy!`
          </p>
        </div>
        <div className="three-single_column">
          <div className="three-text-number">{donationsCounter}</div>
          <h1 className="three-text-header">Organizations supported</h1>
          <p className="three-text-paragraph">
            We are a channel through which many goodies flow to organizations
            which have direct contact with the needy families or single people.
            We are privileged to partner with those who have a burden for
            helping.
          </p>
        </div>
        <div className="three-single_column">
          <div className="three-text-number">7</div>
          <h1 className="three-text-header">Collections organized</h1>
          <p className="three-text-paragraph">
            People just like you step up and organize collections which are
            supervised by our organization, to make sure all items are well
            prepared for transportation and later distribution. Why not try
            yourself?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThreeColumns;

// const COLUMNS_ITEMS = [
//   {
//     id: 1,
//     bags: 10,
//     header: "Bags donated recently",
//     description: `Thanks to your generous donations we were able to distribute ${10}
// large bags full of previously enjoyed things to those who would
// not be able to afford themselves. We wish you could see their joy!`
//   },
//   {
//     id: 2,
//     bags: 5,
//     header: "Organizations supported",
//     description: `We are a channel through which many goodies flow to organizations
//     which have direct contact with the needy families or single
//     people. We are privileged to partner with those who have a burden
//     for helping.`
//   },
//   {
//     id: 3,
//     bags: 7,
//     header: "Collections organized",
//     description: `People just like you step up and organize collections which are
//     supervised by our organization, to make sure all items are well
//     prepared for transportation and later distribution. Why not try
//     yourself?`
//   }
// ];

//{/* {COLUMNS_ITEMS.map(({ id, bags, header, description }) => (
//   <div key={id} className="three-single_column">
//     <div className="three-text-number">{bags}</div>
//     <h1 className="three-text-header">{header}</h1>
//     <p className="three-text-paragraph">{description}</p>
//   </div>
// ))}
