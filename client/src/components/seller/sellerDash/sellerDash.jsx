import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./sellerDash.module.css";
import PersonalInfo from "./personalInfo";
import AddProduct from "./addProduct";

const SellerDash = () => {
  const navigate = useNavigate();
  return (
    <>
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
            <button className={styles["login-btn"]}>Logout</button>
          </div>
        </div>
      </nav>
      <div className={styles["container"]}>
        <div className={styles["sub-container"]}>
          <div className={styles["panel"]}>
            <div className={styles["sub-panel"]}>
              <span>Profile</span>
              <span>Add Product</span>
              <span>My Products</span>
              <span>Logout</span>
            </div>
          </div>
          <div className={styles["display-panel"]}>
            {/* <PersonalInfo /> */}
            <AddProduct />
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerDash;
