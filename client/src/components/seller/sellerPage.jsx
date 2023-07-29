import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./seller.module.css";
import RegisterSeller from "./sellerAuth/registerSeller";
import LoginSeller from "./sellerAuth/loginSeller";

const SellerPage = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);

  const handleSwitch = (rec) => {
    setLogin(rec);
  };

  return (
    <>
      <nav className={styles["nav"]}>
        <div className={styles["content"]}>
          <div onClick={(e) => navigate("/")} style={{cursor: "pointer", backgroundColor: "#fff"}} className={styles["logo"]}>
            <img src="images/logo.png"></img>
          </div>
          <div className={styles["auth"]}>
            <button
              className={styles["login-btn"]}
              onClick={(e) => setLogin(true)}
            >
              Login
            </button>
            <button
              className={styles["register-btn"]}
              onClick={(e) => setLogin(false)}
            >
              Start Selling
            </button>
          </div>
        </div>
      </nav>
      <div className={styles["container"]}>
        <div className={styles["seller-page"]}>
          {login ? <LoginSeller switchTo={handleSwitch} /> : <RegisterSeller />}
        </div>
      </div>
    </>
  );
};
export default SellerPage;
