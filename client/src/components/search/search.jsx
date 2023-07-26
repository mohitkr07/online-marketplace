import React from "react";
import styles from "./search.module.css";
import Product_type1 from "../utils/cards/product_type1";
import Product_type2 from "../utils/cards/product_type2";

// product1 - perimeters: src, product_name, rating, ratingCount, price, original

const Search = () => {
  return (
    <div className={styles["search"]}>
      <div className={styles["filter"]}></div>
      <div className={styles["result"]}>
        {/* <Product_type1
          src="/images/category/sample3.webp"
          product_name="Power of Habit"
          speciality = "paper back"
          rating="1"
          ratingCount="3242"
          price="200"
          original="500"
        />
        <Product_type1
          src="/images/category/sample3.webp"
          product_name="Power of Habit"
          rating="2"
          ratingCount="3242"
          price="199"
          original="400"
        />
        <Product_type1
          src="/images/category/sample3.webp"
          product_name="Power of Habit"
          rating="2"
          ratingCount="3242"
          price="199"
          original="400"
        />
        <Product_type1
          src="/images/category/sample3.webp"
          product_name="Power of Habit"
          rating="2"
          ratingCount="3242"
          price="199"
          original="400"
        />
        <Product_type1
          src="/images/category/sample3.webp"
          product_name="Power of Habit"
          rating="2"
          ratingCount="3242"
          price="199"
          original="400"
        /> */}
        <Product_type2 />
      </div>
    </div>
  );
};

export default Search;
