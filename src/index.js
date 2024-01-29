import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeProvider from "./Context/ThemeProvider";
import UserProvider from "./Context/UserProvider";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>
);
