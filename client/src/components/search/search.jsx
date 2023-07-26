import React from "react";
import styles from "./search.module.css";
import Product_type1 from "../utils/cards/product_type1";
import Product_type2 from "../utils/cards/product_type2";

// product1 - perimeters: src, product_name, rating, ratingCount, price, original
// product2 - perimeters: src, product_name, rating, ratingCount, price, original

const Search = () => {
  const features = ["HD Ready 1366 x 768 Pixels", "1 Year Warranty on Product"];
  return (
    <div className={styles["search"]}>
      <div className={styles["filter"]}></div>
      <div className={styles["result"]}>
        <Product_type2
          src="images/category/sample5.webp"
          product_name="Adsun 80 cm (32 inch) HD Ready LED TV"
          rating="4.1"
          ratingCount="19,279"
          features = {features}
          price="6999"
          mrp="16999"
        />
        <Product_type2
          src="images/category/sample5.webp"
          product_name="Adsun 80 cm (32 inch) HD Ready LED TV"
          rating="3.9"
          ratingCount="19,279"
          features = {features}
          price="6999"
          mrp="16999"
        />
        <Product_type2
          src="images/category/sample5.webp"
          product_name="Adsun 80 cm (32 inch) HD Ready LED TV"
          rating="2.9"
          ratingCount="19,279"
          features = {features}
          price="6999"
          mrp="16999"
        />
        <Product_type2
          src="images/category/sample5.webp"
          product_name="Adsun 80 cm (32 inch) HD Ready LED TV"
          rating="1.9"
          ratingCount="19,279"
          features = {features}
          price="6999"
          mrp="16999"
        />
        <Product_type2
          src="images/category/sample5.webp"
          product_name="Adsun 80 cm (32 inch) HD Ready LED TV"
          rating="1"
          ratingCount="19,279"
          features = {features}
          price="6999"
          mrp="16999"
        />
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
      </div>
    </div>
  );
};

export default Search;
