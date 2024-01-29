import React, { useState, useContext } from "react";
import themeContext from "../Context/themecontext";
import userContext from "../Context/userContext";

function SignUp({ changePage }) {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  const { user, setUser, isValid, setIsValid } = useContext(userContext);

  const { theme } = useContext(themeContext);
  const { color, backgroundColor } = theme;
  const bg = backgroundColor === "white" ? "#e0f0f0" : "#706F6E";

  const textColor = color === "white" ? "black" : "#E78C18";

  const handleChanges = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (loginInfo.name === "") {
      setMessage("Name is required");
      return;
    } else if (loginInfo.email === "" || !loginInfo.email.includes("@")) {
      setMessage("Valid Email is required");
      return;
    } else if (
      !loginInfo.password ||
      loginInfo.password !== loginInfo.confirmPassword
    ) {
      setMessage("Passwords do not match");
      return;
    }

    localStorage.setItem("user", JSON.stringify(loginInfo));
    setUser(loginInfo);
    setLoginInfo({ email: "", password: "", name: "", confirmPassword: "" });
    setMessage("SignUp Successful");
    setIsValid(true);
  };

  return (
    <>
      <form
        className={`flex flex-col space-y-7 items-center px-24 pt-14
         rounded-lg h-5/6`}
        style={{ backgroundColor: bg, color: textColor }}
        onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          className="rounded-md px-5 py-2 
          border-2 border-gray-300
          focus:outline-none focus:ring focus:border-blue-500  text-gray-600 w-60"
          name="name"
          onChange={handleChanges}
          value={loginInfo.name}
        />
        <input
          type="email"
          placeholder="Email"
          className="rounded-md px-5 py-2 
          border-2 border-gray-300
          focus:outline-none focus:ring focus:border-blue-500  text-gray-600 w-60"
          name="email"
          onChange={handleChanges}
          value={loginInfo.email}
        />
        <input
          type="password"
          placeholder="Password"
          className="rounded-md px-5 py-2 
          border-2 border-gray-300
          focus:outline-none focus:ring focus:border-blue-500 text-gray-600 w-60"
          name="password"
          onChange={handleChanges}
          value={loginInfo.password}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="rounded-md px-5 py-2 
          border-2 border-gray-300
          focus:outline-none focus:ring focus:border-blue-500 text-gray-600 w-60"
          name="confirmPassword"
          onChange={handleChanges}
          value={loginInfo.confirmPassword}
        />
        <p className={`h-7 `} style={{ color: textColor }}>
          {message}
        </p>
        <button className="bg-gray-500 px-4 py-2 rounded-md text-white">
          SignUp
        </button>
        <p className="text-center" style={{ color: textColor }}>
          Already have an account{"  "}
          <span className="text-red-600" onClick={changePage}>
            SignIn
          </span>
        </p>
      </form>
    </>
  );
}

export default SignUp;
