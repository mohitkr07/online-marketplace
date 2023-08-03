import React from "react";
import styles from "./home.module.css";
import Categories from "../utils/categories";
import Carousel from "../utils/carousel";
import CategoryList_Card from "../utils/cards/categoryList_card";
import Nav from "../utils/header"
// const LazyCategoryList_Card = React.lazy(() =>
//   import("../utils/cards/categoryList_card")
// );

const Home = () => {


  
  return (
    <>
      <Nav />
      <Categories />
      <div className={styles["container"]}>
        <Carousel />
        <React.Suspense>
          <CategoryList_Card categoryName="Fashion" />
        </React.Suspense>
        <React.Suspense>
          <CategoryList_Card categoryName="Electronics" />
        </React.Suspense>
        <React.Suspense>
          <CategoryList_Card categoryName="Appliances" />
        </React.Suspense>
      </div>
    </>
  );
};

export default Home;
