import React, { useState } from "react";

import ThemeContext from "./themecontext.js";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    color: "black",
    backgroundColor: "white",
    border: "2px solid black",
  });

  const contextValue = {
    theme: theme,
    darkTheme: () => {
      setTheme({
        color: "white",
        backgroundColor: "black",
        border: "2px solid white",
      });
    },
    lightTheme: () => {
      setTheme({
        color: "black",
        backgroundColor: "white",
        border: "2px solid black",
      });
    },
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
