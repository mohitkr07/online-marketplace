import React from "react";
import styles from "./cards.module.css";

const CategoryList_Card = (props) => {
  return (
    <div className={styles["category-list"]}>
      <div className={styles["category-name"]}></div>
      <div className={styles["category-items"]}></div>
    </div>
  );
};

export default CategoryList_Card;
