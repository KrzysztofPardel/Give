import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore";
import * as firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAIgX3jl7-Z3w0lZZnpX51F2E_UXsAmbTM",
  authDomain: "give-authorization.firebaseapp.com",
  projectId: "give-authorization",
  storageBucket: "give-authorization.appspot.com",
  messagingSenderId: "28727795227",
  appId: "1:28727795227:web:e2386f74ea95c89419e2be"
};

const foundationsConfig = {
  apiKey: "AIzaSyBkhvZmLhfNvAaIiS6WdlrLNKy9ZfRD3vo",
  authDomain: "give-foundationsorganization.firebaseapp.com",
  projectId: "give-foundationsorganization",
  storageBucket: "give-foundationsorganization.appspot.com",
  messagingSenderId: "734006185425",
  databaseURL: "",
  appId: "1:734006185425:web:2d873ab82dc7fd0110a4f0"
};

const ContactConfig = {
  apiKey: "AIzaSyDIzXKTk8qeEBbhe_aaXBkRzCJs1St_7EE",
  authDomain: "give-contact-f83c8.firebaseapp.com",
  projectId: "give-contact-f83c8",
  storageBucket: "give-contact-f83c8.appspot.com",
  messagingSenderId: "45664525901",
  appId: "1:45664525901:web:4ab01466f6fc7a9f688604"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const foundationsApp = initializeApp(foundationsConfig, "foundations");
export const db = getFirestore(foundationsApp);

const contactApp = initializeApp(ContactConfig, "contact");
export const dbContact = getFirestore(contactApp);
