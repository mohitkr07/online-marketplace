import React from "react";
import styles from "./cards.module.css";
import Product_Card from "./product_card";

const CategoryList_Card = (props) => {
  return (
    <div className={styles["category-list"]}>
      <div className={styles["category-name"]}>
        <p>{props.categoryName}</p>
      </div>
      <div className={styles["category-items"]}>
        <Product_Card
          src="images/category/sample3.webp"
          rating="4"
          product_name="The Power Of Habit By Duhigg Charles ( Hindi, Paperback, )  (Paperback, Hindi, Duhigg Charles)"
          ratingCount="200"
          price="1750"
          original = "2000"
        />
        <Product_Card
          src="images/category/sample3.webp"
          rating="4"
          product_name="The Power Of Habit By Duhigg Charles ( Hindi, Paperback, )  (Paperback, Hindi, Duhigg Charles)"
          ratingCount="200"
          price="1500"
          original = "2000"
        />
      </div>
    </div>
  );
};

export default CategoryList_Card;
