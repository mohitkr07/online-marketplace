import React, { useState } from "react";
import styles from "./auth.module.css";

const Signup = (props) => {
  const [otpSent, setOtpSent] = useState(false);
  const [signupData, setSignup] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    password: "",
  });
  const [otp, setOtp] = useState("");

  const postData = async () => {
    const res = await fetch("/api/signup", {
      method: "post",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupData),
    });
    const data = await res.json();
    console.log(data);
  };

  const sendOTP = () => {
    setOtpSent(!otpSent);
  };

  const handleSubmit = () => {
    postData();
  };
  const handleChange = (e) => {
    setSignup({ ...signupData, [e.target.name]: e.target.value });
  };

  const authswitch = () => {
    props.switchTo(false);
  };

  return (
    <div className={styles["auth-signup-right"]}>
      {!otpSent && (
        <>
          <input
            type="text"
            name="firstName"
            onChange={handleChange}
            value={signupData.firstName}
            placeholder="Enter First Name"
          />
          <input
            type="text"
            name="lastName"
            value={signupData.lastName}
            onChange={handleChange}
            placeholder="Enter Last Name"
          />
          <input
            type="text"
            name="mobile"
            value={signupData.mobile}
            onChange={handleChange}
            placeholder="Enter Mobile Number"
          />
          <input
            type="email"
            name="email"
            value={signupData.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
          <input
            type="password"
            name="password"
            value={signupData.password}
            onChange={handleChange}
            placeholder="Enter Password"
          />
        </>
      )}
      {otpSent && (
        <input
          style={{ marginBottom: "10px" }}
          type="text"
          name="otp"
          onChange={e=>setOtp(e.target.value)}
          value={otp}
          placeholder="Enter OTP"
        />
      )}
      {otpSent && (
        <div
          style={{
            marginBottom: "1rem",
            display: "flex",
            justifyContent: "space-between",
            fontSize: "80%",
          }}
        >
          <p>OTP sent to email</p>
          <p
            style={{ color: "#068FFF", fontWeight: "bold", cursor: "pointer" }}
          >
            Resend?
          </p>
        </div>
      )}
      {otpSent ? (
        <button
          className={styles["sign-in-button"]}
          name="signup"
          onClick={handleSubmit}
        >
          Submit
        </button>
      ) : (
        <button
          className={styles["sign-in-button"]}
          name="signup"
          onClick={sendOTP}
        >
          Receive OTP
        </button>
      )}
      {!otpSent && (
        <button
          className={styles["auth-switch"]}
          name="signup"
          onClick={authswitch}
        >
          Existing User? Login
        </button>
      )}
      {otpSent && (
        <span
          style={{
            color: "#008bfd",
            width: "100%",
            textAlign: "center",
            marginTop: "10px",
            cursor: "pointer",
          }}
          onClick={(e) => setOtpSent(false)}
        >
          Back
        </span>
      )}
    </div>
  );
};

export default Signup;
