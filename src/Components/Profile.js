import React, { useContext } from "react";
import userContext from "../Context/userContext";
import themeContext from "../Context/themecontext";

function Profile() {
  const { isValid, setIsValid } = useContext(userContext);
  const { theme } = useContext(themeContext);
  const { color, backgroundColor } = theme;
  const bg = backgroundColor === "white" ? "#e0f0f0" : "#706F6E";
  const textColor = backgroundColor === "white" ? "black" : "white";

  const logOut = () => {
    setIsValid(false);
  };

  //retrive data from local storage and destructure it
  const { email, name } = JSON.parse(localStorage.getItem("user"));
  return (
    <div
      className={`flex flex-col space-y-7 items-center justify-around px-24 p-14
         rounded-lg h-5/6 w-4/6`}
      style={{ backgroundColor: bg, color: textColor }}>
      <div>
        <h1>Profile</h1>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
      </div>

      <button
        className="bg-gray-500 px-4 py-2 rounded-md text-white"
        onClick={logOut}>
        Log Out
      </button>
    </div>
  );
}

export default Profile;
