import React, { useState, useContext } from "react";
import themeContext from "../Context/themecontext";
import userContext from "../Context/userContext";

function Login({ changePage }) {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const { setUser, setIsValid } = useContext(userContext);

  const { theme } = useContext(themeContext);
  const { color, backgroundColor } = theme;
  const bg = backgroundColor === "white" ? "#e0f0f0" : "#706F6E";

  const textColor = color === "white" ? "black" : "#E78C18";

  const handleChanges = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      loginInfo.email === "" ||
      !loginInfo.email.includes("@") ||
      !localStorage.getItem("user")
    ) {
      setMessage("Valid Email is required");
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));
    if (
      user.email === loginInfo.email &&
      user.password === loginInfo.password
    ) {
      setUser(user);
      setIsValid(true);
    } else {
      setMessage("Invalid Credentials");
    }
  };

  return (
    <>
      <form
        className={`flex flex-col space-y-6 items-center px-24 pt-14 justify-center
         rounded-lg h-5/6`}
        style={{ backgroundColor: bg, color: textColor }}
        onSubmit={handleSubmit}>
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

        <p className="h-7" style={{ color: textColor }}>
          {message}
        </p>
        <button className="bg-gray-500 px-4 py-2 rounded-md text-white">
          Signin
        </button>
        <p className="text-center">
          Don't have an account{"  "}
          <span className="text-red-600" onClick={changePage}>
            SignUp
          </span>
        </p>
      </form>
    </>
  );
}

export default Login;
