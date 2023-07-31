import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./sellerDash.module.css";
import PersonalInfo from "./personalInfo";
import AddProduct from "./addProduct";
import MyProducts from "./myProducts";

const SellerDash = (e) => {
  const navigate = useNavigate();
  const [displayPage, setPage] = useState("profile");

  const handleLogout = () => {
    logout();
  };

  const logout = async () => {
    const res = await fetch("/api/seller/logout", {
      method: "get",
      credentials: "include",
      headers: {
        "Content-Type": "appliation/json",
      },
    });
    const data = await res.json();
    console.log(data.message);
    if (data.message == "logged out") navigate("/cityPage");
  };

  useEffect(() => {
    checkAuth();
  }, [1]);

  const checkAuth = async () => {
    const res = await fetch("/api/seller/verify", {
      method: "get",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    if (data.message) {
      console.log("checked");
    } else {
      navigate("/citypage");
    }
  };

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
            <button className={styles["login-btn"]} onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </nav>
      <div className={styles["container"]}>
        <div className={styles["sub-container"]}>
          <div className={styles["panel"]}>
            <div className={styles["sub-panel"]}>
              <span onClick={(e) => setPage("profile")}>Profile</span>
              <span onClick={(e) => setPage("addproduct")}>Add Product</span>
              <span onClick={(e) => setPage("myproduct")}>My Products</span>
              <span>Logout</span>
            </div>
          </div>
          <div className={styles["display-panel"]}>
            {displayPage == "profile" ? (
              <PersonalInfo />
            ) : displayPage == "addproduct" ? (
              <AddProduct />
            ) : (
              <MyProducts />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerDash;
