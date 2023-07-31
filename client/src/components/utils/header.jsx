import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./utils.module.css";
import Auth from "../authentication/auth";

const Header = (props) => {
  const navigate = useNavigate();
  const [log, setLog] = useState(false);
  const [showAuth, setAuth] = useState(false);

  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    mobile: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("/api/user", {
      method: "get",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (data.message) {
      setProfile(data.user);
      setLog(true);
    }
  };

  const logOut = async () => {
    const res = await fetch("/api/logout", {
      method: "get",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json()
    if (data.message)
    {
      setLog(false);
      setProfile(null)
    }
  };

  const handleLogout = () => {
    logOut();
  };

  const handleAuth = () => {
    setAuth(true);
  };

  const closeAuth = async (rec) => {
    fetchData();
    setAuth(rec);
  };

  const handleAddShop = () => {
    navigate("/citypage");
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
                <a
                  style={{ textDecoration: "none", color: "#fff" }}
                  href="/user"
                >
                  {profile.firstName}
                </a>
              </div>
            ) : null}
            <span
              className={styles["header-add-shop"]}
              style={{ cursor: "pointer" }}
              onClick={handleAddShop}
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
              // <>
              //   <div className={styles["header-more"]}>
              //     <p style={{cursor: "pointer"}} onClick={e=>logOut}>Logout</p>
              //   </div>
              // </>
              <button
                onClick={handleLogout}
                className={styles["header-signin"]}
              >
                Logout
              </button>
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
