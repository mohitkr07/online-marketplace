import { useState } from "react";
import styles from "./sellerDash.module.css";

const AddProduct = () => {
  const [product, setProduct] = useState({});
  return (
    <div className={styles["add-product"]}>
      <span>
        <h2>Add Product</h2>
      </span>
      <span>
        <p>Category: </p>
        <input type="text"></input>
      </span>
      <span>
        <p>Name: </p>
        <input type="text"></input>
      </span>
      <span>
        <p>Price: </p>
        <input type="text"></input>
      </span>
      <span>
        <p style={{ alignSelf: "flex-start" }}>Description: </p>
        <textarea type="text" />
      </span>
      <button>Add</button>
    </div>
  );
};

export default AddProduct;
