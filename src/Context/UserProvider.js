import React, { useState } from "react";

import userContext from "./userContext.js";

const UserProvider = ({ children }) => {
  const [isValid, setIsValid] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const contextValue = {
    user: user,
    setUser: setUser,
    isValid: isValid,
    setIsValid: setIsValid,
  };

  return (
    <userContext.Provider value={contextValue}>{children}</userContext.Provider>
  );
};

export default UserProvider;
