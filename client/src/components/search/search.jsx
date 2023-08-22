import React, { useEffect, useState } from "react";
import styles from "./search.module.css";
import Product_type1 from "../utils/cards/product_type1";
import Product_type2 from "../utils/cards/product_type2";
import Nav from '../utils/header'
import { useSelector } from "react-redux/es/hooks/useSelector";

// product1 - perimeters: src, product_name, rating, ratingCount, price, original
// product2 - perimeters: src, product_name, rating, ratingCount, price, original

const Search = () => {
  // const products = useSelector((state) => state.storeRes.products[0])
  const [products, setResult] = useState([])
  const term = window.location.search.trim().substring(6) //remove "?item="
  // const term = decodeURIComponent(window.location.search).trim().substring(6) //remove "?item="

  useEffect(() => {
    // products.map(i=> console.log(i.name))
    searchResults((term))
  }, [1])

  const searchResults = async (term) => {
    const res = await fetch(`/api/search/${term}`, {
      method: 'get',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    const result = await res.json();
    if (result.message) {
      setResult(result.products)
      // navigate('/search')
    }
    // setSearchRes(result.products)
  }

  return (
    <>
      <Nav />
      <div className={styles["search"]}>
        <div className={styles["filter"]}></div>
        <div className={styles["result"]}>

          {products.map((product, key) => (
            <Product_type1
              src="/images/category/sample3.webp"
              product_name={product.name}
              rating="2"
              ratingCount="3242"
              price={product.price}
              original={product.comparePrice}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;
