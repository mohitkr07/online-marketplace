import React, { useState } from "react";
import styles from "./seller.module.css";
import RegisterSeller from "./sellerAuth/registerSeller";

const SellerPage = () => {
    const [login, setLogin] = useState(false);

  return (
    <div className={styles["container"]}>
      <nav className={styles["nav"]}>
        <div className={styles["content"]}>
          <div className={styles["logo"]}>
            <img src="images/logo.png"></img>
          </div>
          <div className={styles["auth"]}>
            <button>Login</button>
            <button>Start Selling</button>
          </div>
        </div>
      </nav>
      <div className={styles["seller-page"]}>
        <div></div>
      </div>
    </div>
  );
};
export default SellerPage;
