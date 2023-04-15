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
              <label
                className="application-point_text"
                htmlFor="control_reused"
              >
                clothes, which can be reused
                <button type="button" className="application-point_button" />
              </label>
            </div>
            <div className="application-point_container">
              <label className="application-point_text">
                clothes, which cannot be reused
                <button type="button" className="application-point_button" />
              </label>
            </div>
            <div className="application-point_container">
              <label className="application-point_text">
                toys
                <button type="button" className="application-point_button" />
              </label>
            </div>
            <div className="application-point_container">
              <label className="application-point_text">
                books
                <button type="button" className="application-point_button" />
              </label>
            </div>
            <div className="application-point_container">
              <label className="application-point_text">
                other
                <button type="button" className="application-point_button" />
              </label>
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
