import React, { createContext } from "react";
import app from "../../firebase/firebase.config";
export const AuthContext = createContext(app);

const AuthProvider = ({ children }) => {
  const user = { displayName: "gazi sabbir" };

  const values = { user };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
