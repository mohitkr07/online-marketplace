import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const res = await fetch("/api/seller/verify", {
      method: "get",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    console.log(data.message);
    if (data.message) {
      navigate("/sellerdash");
    }
  };


  const [confirmation, setConfirmation] = useState(false)
  const handleConfirm = (rec) => {
    if (rec) {
      setConfirmation(rec)
      document.body.style.overflowY = "hidden"
    }
  }

  const setOverflow = () => {
    document.body.style.overflowY = "visible"
  }

  return (
    <>
      {confirmation && <div className={styles["confirm-div"]}>
        <div className={styles["confirm-modal"]}>
          <span>
            <p>Congratulations!</p>
            <p>You are now a Seller on City Market</p>
          </span>
          <button onClick={() => { setConfirmation(false); setOverflow(); setLogin(true) }}>Thanks</button>
        </div>
      </div>}
      <nav className={styles["nav"]}>
        <div className={styles["content"]}>
          <div
            onClick={(e) => navigate("/")}
            style={{ cursor: "pointer", backgroundColor: "#fff" }}
            className={styles["logo"]}
          >
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
          {login ? <LoginSeller switchTo={handleSwitch} /> : <RegisterSeller confirm={handleConfirm} />}
        </div>
      </div>
    </>
  );
};
export default SellerPage;
