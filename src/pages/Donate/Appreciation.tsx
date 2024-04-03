import Decoration from "../../assets/Decoration.svg";

const Appreciation = () => {
  return (
    <div className="stepDonate-appreciation_container">
      <div className="stepDonate-appreciation_container_small">
        <h2 className="stepDonate-appreciation_header">
          Thank you for the submission of this form. We have just sent you an
          email which received details concerning the collection.
        </h2>
        <img
          src={Decoration}
          alt="decoration"
          className="stepDonate-appreciation_decoration"
        />
      </div>
    </div>
  );
};

export default Appreciation;
