import React, { useState } from "react";
import styles from "./auth.module.css";

const Login = (props) => {
  const [otpSent, setOtp] = useState(false);
  const [loginData, setLogin] = useState({
    mobile: "+91 ",
    email: "",
    otp: "",
  });

  const handleClick = () => {
    if (!otpSent) setOtp(true);
  };
  const handleChange = (e) => {
    setLogin({ ...loginData, [e.target.name]: e.target.value });
  };

  const HandleLogin = () => {
    if (otpSent) {
      return <>Login</>;
    } else return <>Send OTP</>;
  };

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
        placeholder="Enter Mobile Number"
      />
      {otpSent && (
        <div
          style={{
            marginBottom: "1rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p>OTP sent to Mobile</p>
          <p
            style={{ color: "#068FFF", fontWeight: "bold", cursor: "pointer" }}
          >
            Resend?
          </p>
        </div>
      )}
      {otpSent && (
        <input
          type="text"
          name="otp"
          onChange={handleChange}
          placeholder="Enter OTP"
        />
      )}
      <button
        className={styles["sign-in-button"]}
        name="login"
        onClick={handleClick}
      >
        <HandleLogin />
      </button>
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
