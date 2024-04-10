import Decoration from "../../assets/Decoration.svg";

export const Appreciation = () => {
  return (
    <div className="multiform-appreciation_container">
      <div className="multiform-appreciation_container_small">
        <h2 className="multiform-appreciation_header">
          Thank you for the submission of this form. We have just sent you an
          email which received details of your collection.
        </h2>
        <img
          src={Decoration}
          alt="decoration"
          className="multiform-appreciation_decoration"
        />
      </div>
    </div>
  );
};

export default Appreciation;
