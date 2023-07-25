import React from "react";
import styles from "./home.module.css";
import Categories from "../utils/categories";
import Carousel from "../utils/carousel";

const LazyCategoryList_Card = React.lazy(() =>
  import("../utils/cards/categoryList_card")
);

const Home = () => {
  return (
    <>
      <Categories />
      <div className={styles["container"]}>
        <Carousel />
        <React.Suspense>
          <LazyCategoryList_Card categoryName="Fashion" />
        </React.Suspense>
        <React.Suspense>
          <LazyCategoryList_Card categoryName="Electronics" />
        </React.Suspense>
        <React.Suspense>
          <LazyCategoryList_Card categoryName="Appliances" />
        </React.Suspense>
      </div>
    </>
  );
};

export default Home;
