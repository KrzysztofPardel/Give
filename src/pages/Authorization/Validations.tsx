import * as Yup from "yup";

//SignIn
export const schemaSignIn = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,3}$/, "Invalid email format")
    .min(5, "Email is too short")
    .max(55, "Email is too long")
    .required("Email is required"),
  password: Yup.string()
    .matches(/[A-Z]+/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]+/, "Password must contain at least one number")
    .required("Password is required")
});

//SignUp
export const schemaSignUp = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,3}$/, "Invalid email format")
    .min(5, "Email is too short")
    .max(55, "Email is too long")
    .required("Email is required"),
  password: Yup.string()
    .matches(/[A-Z]+/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]+/, "Password must contain at least one number")
    .required("Password is required"),
  repeatpassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Please repeat the password")
});

//Contact
export const schemaContact = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name is too short")
    .max(30, "Name is too long")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,3}$/, "Invalid email format")
    .min(5, "Email is too short")
    .max(55, "Email is too long")
    .required("Email is required"),
  message: Yup.string()
    .min(5, "Message is too short- min. 2 characters")
    .max(150, "Message is too long- max. 150 characters")
    .required("Message is required")
});
