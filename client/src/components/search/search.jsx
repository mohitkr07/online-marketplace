import React, { useEffect } from "react";
import styles from "./search.module.css";
import Product_type1 from "../utils/cards/product_type1";
import Product_type2 from "../utils/cards/product_type2";
import Nav from '../utils/header'
import { useSelector } from "react-redux/es/hooks/useSelector";

// product1 - perimeters: src, product_name, rating, ratingCount, price, original
// product2 - perimeters: src, product_name, rating, ratingCount, price, original

const Search = () => {
  const products = useSelector((state) => state.storeRes.products[0])

  const features = ["HD Ready 1366 x 768 Pixels", "1 Year Warranty on Product"];

  // useEffect(() => {
  //   products.map(i=> console.log(i.name))
  // }, [1])

  return (
    <>
      <Nav />
      <div className={styles["search"]}>
        <div className={styles["filter"]}></div>
        <div className={styles["result"]}>

          {products.map((product, key)=>(
            <Product_type1
            src="/images/category/sample3.webp"
            product_name= {product.name}
            rating="2"
            ratingCount="3242"
            price={product.price}
            original="400"
          />
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;
