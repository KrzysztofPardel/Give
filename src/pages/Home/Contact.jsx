import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import "./SCSS/Form.scss";
import Decoration from "../../assets/Decoration.svg";
import BgForm from "../../assets/BgForm.jpg";
import { dbContact } from "../../firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // const handleSubmit = (e) => {
  //   epreventDefault();

  //   dbContact
  //     .collection("contacts")
  //     .add({
  //       name: name,
  //       email: email,
  //       message: message
  //     })
  //     .then(() => {
  //       alert("Message has been submitted!");
  //     });
  //     .catch((error)=>{
  //       alert(error.message)
  //     });
  //     setName("");
  //     setEmail("");
  //     setMessage("");
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dbContact.collection("contacts").add({
        name: name,
        email: email,
        message: message
      });
      alert("Message has been submitted!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      alert(error.message);
    }
  };
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
            <label className="form-label" htmlFor="nameForm">
              Enter your name
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="e.g. John Smith"
                className="form-input"
                id="nameForm"
              />
            </label>
          </div>
          <div className="form-input_container_small">
            <label className="form-label" htmlFor="emailForm">
              Enter your email
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="emial"
                placeholder="johnsmith@gmail.com"
                className="form-input"
                id="emailForm"
              />
            </label>
          </div>
        </div>
        <div className="form-textarea_container">
          <label className="form-label_textarea" htmlFor="messageForm">
            Enter your message
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              placeholder="e.g. I wanted to reach out and commend your efforts in collecting used clothes. Your work is incredibly important and has a positive impact on both the environment and people in need."
              className="form-textarea"
              id="messageForm"
            />
          </label>
          <div className="form-container_button">
            <button
              onSubmit={handleSubmit}
              type="button"
              className="form-button"
            >
              Wyślij
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
