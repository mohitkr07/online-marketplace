import React, { useState } from "react";
import styles from "./utils.module.css";

const Header = () => {
  const [log, setLog] = useState(false);

  return (
    <div className={styles["header"]}>
      <div className={styles["header-content"]}>
        <div className={styles["header-logo"]}>
          <img src="images/logo.png"></img>
        </div>
        <div className={styles["header-location-search"]}>
          <div className={styles["header-location"]}>
            <input type="text" placeholder="location" />
          </div>

          <div className={styles["header-search"]}>
            <input type="text" placeholder="Find in your Market" />
            <i style={{"margin": "0 15px"}} class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div className={styles["header-actions"]}>
          {log ? (
            <div className={styles["header-profile-options"]}>Mohit</div>
          ) : null}
          <span
            className={styles["header-add-shop"]}
            style={{ cursor: "pointer" }}
          >
            <i class="fa-solid fa-shop" style={{ "margin-right": "6px" }} />
            Add Your Shop
          </span>
          <div
            className={styles["header-cart"]}
            style={{ display: "flex", "align-items": "flex-end" }}
            >
            <i
              class="fa-solid fa-cart-shopping"
              style={{ "font-size": "1.3rem" }}
              />
            <p style={{ "margin-left": "6px", height: "fit-content" }}>Cart</p>
          </div>
              {log ? (
                <>
                  <div className={styles["header-more"]}><p>More</p></div>
                </>
              ) : (
                <button className={styles["header-signin"]}>Sign in</button>
              )}
        </div>
      </div>
    </div>
  );
};

export default Header;
