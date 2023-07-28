import React, { useState } from "react";
import "./App.css";
import Container from "./components/container";
import Auth from "./components/authentication/auth";

const App = () => {
  // const [showAuth, setAuth] = useState(true);

  // const handleAuth = (rec) => {
  //   setAuth(rec);
  // };
  return (
    <>
      <Container />
      {/* {showAuth ? <Auth className="auth" onClick={handleAuth} /> : null} */}
    </>
  );
};

export default App;
