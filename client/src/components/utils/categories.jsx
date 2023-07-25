import React from "react";
import styles from "./utils.module.css";

const Categories = () => {
  return (
    <div className={styles["categories"]}>
      <div className={styles["categories-content"]}>
        <div
          className={`${styles["categories-mobile"]} ${styles["categories-items"]}`}
        >
          <div className={`${styles["item-1"]} ${styles["items"]}`}>
            <img src="images/mobiles.png" />
          </div>
          <p>Mobiles</p>
        </div>
        <div
          className={`${styles["categories-electronics"]} ${styles["categories-items"]}`}
        >
          <div className={`${styles["item-2"]} ${styles["items"]}`}>
            <img src="images/electronics.png" />
          </div>
          <p>Electronics</p>
        </div>
        <div
          className={`${styles["categories-fashion"]} ${styles["categories-items"]}`}
        >
          <div className={`${styles["item-3"]} ${styles["items"]}`}>
            <img src="images/fashion.png" />
          </div>
          <p>Fashion</p>
        </div>
        <div
          className={`${styles["categories-sports"]} ${styles["categories-items"]}`}
        >
          <div className={`${styles["item-4"]} ${styles["items"]}`}>
            <img src="images/sports.png" />
          </div>
          <p>Sports</p>
        </div>
        <div
          className={`${styles["categories-home-furniture"]} ${styles["categories-items"]}`}
        >
          <div className={`${styles["item-5"]} ${styles["items"]}`}>
            <img src="images/home.png" />
          </div>
          <p>Home & Furniture</p>
        </div>
        <div
          className={`${styles["categories-appliances"]} ${styles["categories-items"]}`}
        >
          <div className={`${styles["item-6"]} ${styles["items"]}`}>
            <img src="images/appliances.png" />
          </div>
          <p>Appliances</p>
        </div>
        <div
          className={`${styles["categories-toys"]} ${styles["categories-items"]}`}
        >
          <div className={`${styles["item-7"]} ${styles["items"]}`}>
            <img src="images/toys.png" />
          </div>
          <p>Toys</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
