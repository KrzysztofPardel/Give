import { useNavigate } from "react-router-dom";
import "./SCSS/Application.scss";

const Application = () => {
  //   const handleClick = () => {
  //     navigate("/signin");
  //   };
  return (
    <div className="application-background">
      <div className="application-container">
        <div className="application-container_top">
          <h2 className="application_top_header">Important!</h2>
          <p className="application_top_paragraph">
            Fill out the details concerning the items you want to give. This way
            we will be able to know who should receive them.
          </p>
        </div>
        <div className="application-container_bottom">
          <p className="application-steps">Krok 1/4</p>
          <div className="application-text_container">
            <h2 className="application-text_header">
              Mark what you want to donate:
            </h2>
            <div className="application-point_container">
              <button type="button" className="application-point_button">
                2
              </button>
              <p className="application-point_text">
                clothes,which can be reused
              </p>
            </div>
            <div className="application-point_container">
              <button type="button" className="application-point_button">
                2
              </button>
              <p className="application-point_text">
                clothes, which cannot be reused
              </p>
            </div>
            <div className="application-point_container">
              <button type="button" className="application-point_button">
                2
              </button>
              <p className="application-point_text">toys</p>
            </div>
            <div className="application-point_container">
              <button type="button" className="application-point_button">
                2
              </button>
              <p className="application-point_text">books</p>
            </div>
            <div className="application-point_container">
              <button type="button" className="application-point_button">
                2
              </button>
              <p className="application-point_text">other</p>
            </div>
          </div>
          <div className="application-button_container">
            <button type="button" className="application-button">
              Back
            </button>
            <button type="button" className="application-button">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
