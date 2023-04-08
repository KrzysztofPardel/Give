// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIgX3jl7-Z3w0lZZnpX51F2E_UXsAmbTM",
  authDomain: "give-authorization.firebaseapp.com",
  projectId: "give-authorization",
  storageBucket: "give-authorization.appspot.com",
  messagingSenderId: "28727795227",
  appId: "1:28727795227:web:e2386f74ea95c89419e2be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
