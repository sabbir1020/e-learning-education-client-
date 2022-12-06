import React, { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
export const AuthContext = createContext(app);

const AuthProvider = ({ children }) => {
  const auth = getAuth();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   createUser email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   signInWith email and password
  const signInEmailPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // google sign in with firebase
  const googleSign = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  //    github sign in with firebase
  const gitHubSign = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  //   sign out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //    user Auth State Current
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  const values = {
    user,
    loading,
    createUser,
    updateUserProfile,
    signInEmailPassword,
    googleSign,
    gitHubSign,
    logOut,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
