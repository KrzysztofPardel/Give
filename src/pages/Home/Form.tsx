import { useState } from "react";
import "./SCSS/Form.scss";
import Decoration from "../../assets/Decoration.svg";
import BgForm from "../../assets/BgForm.jpg";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  return (
    <div id="contact" className="form-container">
      <div className="form-container_left">
        <img src={BgForm} alt="group of people" className="form-image" />
      </div>
      <div className="form-container_right">
        <h1 className="form-text_header">Contact Us</h1>
        <img src={Decoration} alt="box" className="form-decoration_image" />
        <div className="form-input_container">
          <div className="form-input_container_small">
            <label className="form-label">Enter your name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="e.g. John Smith"
              className="form-input"
            />
          </div>
          <div className="form-input_container_small">
            <label className="form-label">Enter your email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="emial"
              placeholder="johnsmith@gmail.com"
              className="form-input"
            />
          </div>
        </div>
        <div className="form-textarea_container">
          <label className="form-label_textarea">Enter your message</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="e.g. I wanted to reach out and commend your efforts in collecting used clothes. Your work is incredibly important and has a positive impact on both the environment and people in need."
            className="form-textarea"
          />
          <div className="form-container_button">
            <button type="button" className="form-button">
              Wyślij
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
