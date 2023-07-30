import React, { useEffect, useState } from "react";
import styles from "./auth.module.css";
import Login from "./login";
import Signup from "./signup";

const Auth = (props) => {
  const [newUser, setNewUser] = useState(true);

  useEffect(() => {
    document.body.style.overflowY = "hidden";
  }, []);

  const closeModal = (e) => {
    if (e.target == e.currentTarget) {
      props.onClick(false);
      document.body.style.overflowY = "visible";
    }
  };

  const authSwitch = (rec) => {
    setNewUser(rec);
  };

  //to close the login window and navigate to home
  const closeAuth = (rec) => {
    props.onClick(rec);
    document.body.style.overflowY = "visible";
  };

  return (
    <div onClick={closeModal} className={styles["container"]}>
      <div className={styles["auth"]}>
        <div className={styles["auth-left"]}></div>
        {!newUser ? (
          <Signup switchTo={authSwitch} />
        ) : (
          <Login Logged={closeAuth} switchTo={authSwitch} />
        )}
      </div>
    </div>
  );
};

export default Auth;
