import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./sellerDash.module.css";
import PersonalInfo from "./personalInfo";
import AddProduct from "./addProduct";
import MyProducts from "./myProducts";

const SellerDash = (e) => {
  const navigate = useNavigate();
  const [displayPage, setPage] = useState("profile");

  const handleLogout = (e) => {
    if (e.target.name == "logout" || e.target.innerHTML == "Logout") logout("logout");
    else if (e.target.name == "logoutall") logout("logoutall");
  };

  const logout = async (param) => {
    const res = await fetch(`/api/seller/${param}`, {
      method: "get",
      credentials: "include",
      headers: {
        "Content-Type": "appliation/json",
      },
    });
    const data = await res.json();
    console.log(data.message);
    if (data.message) navigate("/cityPage");
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
            <button className={styles["login-btn"]} name="logout" onClick={handleLogout}>
              Logout
            </button>
            <button className={styles["login-btn"]} name="logoutall" onClick={handleLogout}>
              Logout Everywhere
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
              <span onClick={handleLogout}>Logout</span>
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
