import { jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { auth } from "../firebase";

const UserContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  const values = {
    createUser,
    user,
    logout,
    signIn
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export const UserAuth = () => {
  return useContext(UserContext);
};

// AuthContextProvider.propTypes = {
//   children: jsx("element").isRequired
// };
