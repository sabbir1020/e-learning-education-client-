import React, { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
export const AuthContext = createContext(app);

const AuthProvider = ({ children }) => {
  const auth = getAuth();
  const [user, setUser] = useState(null);
  // google sign in with firebase
  const googleSign = (provider) => {
    return signInWithPopup(auth, provider);
  };

  //   sign out
  const logOut = () => {
    return signOut(auth);
  };

  //    user Auth State Current
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);
  const values = { user, googleSign, logOut };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
