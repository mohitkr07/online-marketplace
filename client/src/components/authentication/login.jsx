import React, { useState } from "react";
import styles from "./auth.module.css";

const Login = (props) => {
  const [user, setUser] = useState(false);
  const [loginData, setLogin] = useState({
    mobile: "",
    email: "",
    otp: "",
  });

  const handleClick = () => {
    if (!user) setUser(true);
  };
  const handleChange = (e) => {
    setLogin({ ...loginData, [e.target.name]: e.target.value });
  };

  // const HandleLogin = () => {
  //   if (user) {
  //     return <>Login</>;
  //   } else return <>Send OTP</>;
  // };

  const authswitch = () => {
    props.switchTo(true);
  };

  return (
    <div className={styles["auth-signup-right"]}>
      <input
        type="text"
        name="mobile"
        onChange={handleChange}
        value={loginData.mobile}
        placeholder="mobile/email"
        disabled={user}
      />

      {user && (
        <input
          type="text"
          name="otp"
          onChange={handleChange}
          placeholder="Enter Password"
          style={{ marginBottom: "10px" }}
        />
      )}
      {user && (
        <div
          style={{
            marginBottom: "1rem",
            display: "flex",
            justifyContent: "space-between",
            fontSize: "80%",
          }}
        >
          <p style={{ color: "#068FFF", cursor: "pointer" }}>
            Forgot Password?
          </p>
        </div>
      )}
      {user ? (
        <button
          className={styles["sign-in-button"]}
          name="login"
          onClick={handleClick}
        >
          Login
        </button>
      ) : (
        <button
          className={styles["sign-in-button"]}
          name="login"
          onClick={handleClick}
        >
          Next
        </button>
      )}
      {user && (
        <p
          style={{
            marginTop: "5px",
            width: "100%",
            textAlign: "right",
            color: "#068FFF",
            cursor: "pointer",
            fontSize: "85%"
          }}
          name="signup"
          onClick={(e) => setUser(false)}
        >
          Back
        </p>
      )}
      <button
        className={styles["auth-switch"]}
        name="signup"
        onClick={authswitch}
      >
        New to the Market? Signup
      </button>
    </div>
  );
};

export default Login;
