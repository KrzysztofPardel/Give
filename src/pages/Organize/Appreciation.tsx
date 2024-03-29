import Decoration from "../../assets/Decoration.svg";

export const Appreciation = () => {
  return (
    <div className="application-appreciation_container">
      <div className="application-appreciation_container_small">
        <h2 className="application-appreciation_header">
          Thank you for the submission of this form. We have just sent you an
          email which received details of your collection.
        </h2>
        <img
          src={Decoration}
          alt="decoration"
          className="application-appreciation_decoration"
        />
      </div>
    </div>
  );
};

export default Appreciation;
