import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { dbContact } from "../../firebase";
import "./SCSS/Contact.scss";
import Decoration from "../../assets/Decoration.svg";
import BgForm from "../../assets/BgForm.jpg";

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(dbContact, "contacts"), {
        name,
        email,
        message
      });
      console.log("Document written with ID: ", docRef.id);
      alert("Message has been submitted!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error: any) {
      alert(error.message);
    }
  };
  return (
    <div id="contact" className="form-container">
      <div className="form-container_left">
        <img src={BgForm} alt="group of people" className="form-image" />
      </div>
      <form className="form-container_right" onSubmit={handleSubmit}>
        <h1 className="form-text_header">Contact us</h1>
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
                type="email"
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
              placeholder="e.g. I wanted to reach out and commend your efforts in collecting used clothes. Your work is incredibly important and has a positive impact on both the environment and people in need."
              className="form-textarea"
              id="messageForm"
            />
          </label>
          <div className="form-container_button">
            <button type="submit" className="form-button">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
