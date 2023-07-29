import React, { useState } from "react";
import styles from "./sellerAuth.module.css";

const LoginSeller = (props) => {
  const [cred, setCred] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {};
  const switchtoRegister = () => {
    props.switchTo(false);
  };
  return (
    <div className={styles["login"]}>
      <div className={styles["title2"]}>
        <h2>Login</h2>
        <p style={{ fontSize: "85%" }}>using seller account</p>
      </div>
      <span className={styles["form"]}>
        <input
          type="text"
          placeholder="Enter email"
          name="email"
          value={cred.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={cred.password}
          onChange={handleChange}
        />
        <p style={{ fontSize: "80%", color: "#008bfd", cursor: "pointer" }}>Forgot Password?</p>
        <button className={styles["login-btn"]} onClick={handleLogin}>
          Login
        </button>
        <button className={styles["btn"]} onClick={switchtoRegister}>
          New Seller? Register
        </button>
      </span>
    </div>
  );
};

export default LoginSeller;
