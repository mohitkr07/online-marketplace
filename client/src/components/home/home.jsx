import React from "react";
import styles from "./home.module.css";
import Categories from "../utils/categories";
import Carousel from "../utils/carousel";

const Home = () => {
  return (
    <>
      <Categories />
      <div className={styles["container"]}>
        <Carousel />
      </div>
    </>
  );
};

export default Home;
