import React, { createContext } from "react";

const AuthPovider = ({ children }) => {
  const AuthContext = createContext(null);

  const authInfo = {
    name: "shakil",
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthPovider;
