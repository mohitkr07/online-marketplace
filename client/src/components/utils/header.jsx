import React, { useEffect, useState } from "react";
import styles from "./utils.module.css";
import Auth from "../authentication/auth";

const Header = (props) => {
  const [log, setLog] = useState(false);
  const [showAuth, setAuth] = useState(false);

  const handleAuth = () => {
    setAuth(true);
  };

  const closeAuth = async (rec) => {
    setAuth(rec);
  };

  return (
    <>
      {showAuth && <Auth onClick={closeAuth} />}
      <div className={styles["header"]}>
        <div className={styles["header-content"]}>
          <div className={styles["header-logo"]}>
            <a href="/">
              <img src="images/logo.png"></img>
            </a>
          </div>
          <div className={styles["header-location-search"]}>
            <div className={styles["header-location"]}>
              <input type="text" placeholder="location" />
            </div>

            <div className={styles["header-search"]}>
              <input type="text" placeholder="Find in your Market" />
              <i
                style={{ margin: "0 15px" }}
                className="fa-solid fa-magnifying-glass"
              ></i>
            </div>
          </div>
          <div className={styles["header-actions"]}>
            {log ? (
              <div className={styles["header-profile-options"]}>
                <a style={{textDecoration: "none" , color: "#fff"}} href="/user">Mohit</a>
              </div>
            ) : null}
            <span
              className={styles["header-add-shop"]}
              style={{ cursor: "pointer" }}
            >
              <i className="fa-solid fa-shop" style={{ marginRight: "6px" }} />
              Add Your Shop
            </span>
            <div
              className={styles["header-cart"]}
              style={{ display: "flex", alignItems: "flex-end" }}
            >
              <i
                className="fa-solid fa-cart-shopping"
                style={{ fontSize: "1.3rem" }}
              />
              <p style={{ marginLeft: "6px", height: "fitContent" }}>Cart</p>
            </div>
            {log ? (
              <>
                <div className={styles["header-more"]}>
                  <p>More</p>
                </div>
              </>
            ) : (
              <button onClick={handleAuth} className={styles["header-signin"]}>
                Sign in
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
