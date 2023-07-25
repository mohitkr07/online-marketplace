import React from "react";
import styles from "./home.module.css";
import Categories from "../utils/categories";
import CategoryList_Card from "../utils/cards/categoryList_card";
import Carousel from "../utils/carousel";

const Home = () => {
  return (
    <>
      <Categories />
      <div className={styles["container"]}>
        <Carousel />
        <CategoryList_Card />
        <CategoryList_Card />
        <CategoryList_Card />
      </div>
    </>
  );
};

export default Home;
