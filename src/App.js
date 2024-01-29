import React, { useState, useContext, useEffect } from "react";
import themeContext from "./Context/themecontext";
import Home from "./Components/Home";
import "./App.css";

function App() {
  const { theme, darkTheme, lightTheme } = useContext(themeContext);

  const [isdark, setIsDark] = useState(false);

  const switchTheme = () => {
    if (isdark === false) {
      darkTheme();
    } else {
      lightTheme();
    }
    let currenttheme = !isdark;
    localStorage.setItem("isDark", currenttheme);
    setIsDark(currenttheme);
  };

  useEffect(() => {
    let currenttheme = localStorage.getItem("isDark");
    if (currenttheme === "true") {
      setIsDark(true);
      darkTheme();
    } else {
      lightTheme();
      setIsDark(false);
    }
  }, []);

  return (
    <div>
      <div
        className="text-center overflow-hidden pt-10 w-screen h-screen flex flex-col items-center justify-center "
        style={theme}>
        <button
          onClick={switchTheme}
          className=" bg-red-500 hover:bg-blue-700 px-4 py-2 w-48">
          Switch theme
        </button>
        <div
          className={`p-3 bg-white-600 flex items-center justify-center flex-col w-screen h-screen`}>
          <Home></Home>
        </div>
      </div>
    </div>
  );
}

export default App;
