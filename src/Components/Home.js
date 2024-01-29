import React, { useContext, useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import Profile from "./Profile";
import userContext from "../Context/userContext";

function Home() {
  const { isValid } = useContext(userContext);
  const [showLogin, setShowLogin] = useState(false);

  const changePage = () => {
    setShowLogin((prevShowLogin) => !prevShowLogin);
  };

  return (
    <>
      {isValid ? (
        <Profile />
      ) : showLogin ? (
        <Login changePage={changePage} />
      ) : (
        <SignUp changePage={changePage} />
      )}
    </>
  );
}

export default Home;
