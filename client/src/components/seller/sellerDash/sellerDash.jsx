import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./sellerDash.module.css";
import PersonalInfo from "./personalInfo";
import AddProduct from "./addProduct";
import MyProducts from "./myProducts";

const SellerDash = (e) => {
    const [displayPage, setPage] = useState("profile");
  
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
              <span onClick={e=>setPage("profile")}>Profile</span>
              <span onClick={e=>setPage("addproduct")}>Add Product</span>
              <span onClick={e=>setPage("myproduct")}>My Products</span>
              <span>Logout</span>
            </div>
          </div>
          <div className={styles["display-panel"]}>
            {/* <PersonalInfo /> */}
            {/* <AddProduct /> */}
            {/* <MyProducts /> */}

            {displayPage=='profile'? <PersonalInfo /> : displayPage=="addproduct" ? <AddProduct /> : <MyProducts />}

          </div>
        </div>
      </div>
    </>
  );
};

export default SellerDash;
