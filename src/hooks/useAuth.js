import { createContext, useContext, useEffect, useState } from "react";

import { init, logIn as authLogin } from "../lib/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    init((user) => {
      setUser(user);
    });
  }, []);

  const logIn = () => {
    authLogin();
    console.log("login");
  };

  const contextValue = { user, logIn };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
