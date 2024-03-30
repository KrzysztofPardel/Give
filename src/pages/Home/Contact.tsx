import { useState, useRef, FormEvent, useEffect } from "react";
//styles
import "./SCSS/Contact.scss";
import Decoration from "../../assets/Decoration.svg";
import BgForm from "../../assets/BgForm.jpg";
//Firebase
import { collection, addDoc } from "firebase/firestore";
import { dbContact } from "../../firebase";
//emailjs
import emailjs from "@emailjs/browser";
//validation
import * as Yup from "yup"; // Import Yup
import { schemaContact } from "../Authorization/Validations";

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [showSentConfirmation, setShowSentConfirmation] =
    useState<boolean>(false);
  const form = useRef<null>(null); //initial ref value changed from undefined to ref

  //show confirmation that the email has been sent
  const showConfirmation = () => {
    setShowSentConfirmation(true);
    setTimeout(() => {
      setShowSentConfirmation(false);
    }, 5000);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(""); // Reset error state
    //validation and adding data to Firebase
    
    try {
      await schemaContact.validate(
        { name, email, message },
        { abortEarly: false }
      );
      if (form.current) {
        // Sending email through emailJS
        emailjs
          .sendForm("service_gjk9kuj", "template_jszkhc6", form.current, {
            publicKey: "7ZBJB5X4YZcVd9q9X"
          })
          .then(
            (result) => {
              console.log("Email has been sent successfully.", result.text);
              showConfirmation(); // Show confirmation if email is sent successfully
            },
            (error: any) => {
              console.log(
                "Email has NOT been sent due to an error.",
                error.text
              );
            }
          );

        // Add data to Firebase
        const docRef = await addDoc(collection(dbContact, "contacts"), {
          name,
          email,
          message
        });

        console.log("Document written with ID: ", docRef.id);
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error: any) {
      if (error instanceof Yup.ValidationError) {
        const errors = error.inner.map((err: any) => err.message);
        setError(errors.join(", "));
      } else {
        setError(error.messgage);
      }
    }
    //show confirmation message once the error was cleared out
    useEffect(() => {
      if (!error) {
        showConfirmation();
      }
    }, [error]);
  };

  return (
    <div id="contact" className="form-container">
      <div className="form-container_image">
        <img src={BgForm} alt="group of people" className="form-image" />
      </div>
      <form ref={form} className="form-container_text" onSubmit={handleSubmit}>
        <h1 className="form-text_header">Contact us</h1>
        <img src={Decoration} alt="box" className="form-decoration_image" />
        <div className="form-input_container">
          <div className="form-input_container_small">
            <label className="form-label" htmlFor="nameForm">
              Enter your name
            </label>
            <input
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="John Smith"
              className="form-input"
              id="nameForm"
            />
          </div>
          <div className="form-input_container_small">
            <label className="form-label" htmlFor="emailForm">
              Enter your email
            </label>
            <input
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="johnsmith@gmail.com"
              className="form-input"
              id="emailForm"
            />
          </div>
        </div>
        <div className="form-textarea_container">
          <label className="form-label_textarea" htmlFor="messageForm">
            Enter your message
          </label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="e.g. I wanted to reach out and commend your efforts in collecting used clothes. Your work is incredibly important and has a positive impact on both the environment and people in need."
            className="form-textarea"
            id="messageForm"
          />
          {error && <p className="auth-error-message">{error}</p>}

          <div className="form-container_button">
            <button type="submit" className="form-button">
              Submit
            </button>
          </div>
        </div>
        <p
          className={
            showSentConfirmation
              ? "form-message_sent"
              : "form-message_sent invisible"
          }
        >
          <span className="form-message_sent_span">Thank you </span>for
          contacting us. We will keep in touch with you!
        </p>
      </form>
    </div>
  );
};

export default Contact;
