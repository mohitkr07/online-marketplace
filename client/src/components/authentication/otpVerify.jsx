import React, { useState } from "react";
import styles from "./auth.module.css";

const Verify = (props) => {
  const [otp, setotp] = useState("");

  const handleChange = (e) => {
    setotp(e.target.value);
  };
  const handleClick = ()=>{
    
  }
  const handleBack = ()=>{
    props.goBack(false)
  }
  return (
    <div className={styles["auth-signup-right"]}>
      <div
        style={{
          marginBottom: "1rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p>OTP sent to Mobile</p>
        <p style={{ color: "#068FFF", fontWeight: "bold", cursor: "pointer" }}>
          Resend?
        </p>
      </div>

      <input
        type="text"
        name="otp"
        onChange={handleChange}
        placeholder="Enter OTP"
      />

      <button
        className={styles["sign-in-button"]}
        name="Submit"
        onClick={handleClick}
      ></button>
      <span goBack={handleBack} >Back</span>
    </div>
  );
};

export default Verify;
