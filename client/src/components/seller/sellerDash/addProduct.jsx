import { useState } from "react";
import styles from "./sellerDash.module.css";

const AddProduct = () => {
  const [product, setProduct] = useState({
    category: "",
    name: "",
    price: "",
    description: "",
  });

  const postData = async () => {
    const res = await fetch("/api/addproduct", {
      method: "post",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const data = await res.json();
    if (data.message) {
      setProduct({ ...product, category: "", name: "", price: "", description: "" })
      alert("product added successfully")
    }
  };
  const handleAddProduct = () => {
    postData();
  };
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  return (
    <div className={styles["add-product"]}>
      <span>
        <h2>Add Product</h2>
      </span>
      <span>
        <p>Category: </p>
        <input
          type="text"
          placeholder="Enter Category"
          name="category"
          value={product.category}
          onChange={handleChange}
        />
      </span>
      <span>
        <p>Name: </p>
        <input
          type="text"
          placeholder="Enter product name"
          name="name"
          value={product.name}
          onChange={handleChange}
        ></input>
      </span>
      <span>
        <p>Price: </p>
        <input
          type="text"
          placeholder="Enter price"
          name="price"
          value={product.price}
          onChange={handleChange}
        ></input>
      </span>
      <span>
        <p style={{ alignSelf: "flex-start" }}>Description: </p>
        <textarea
          type="text"
          placeholder="Description"
          name="description"
          value={product.description}
          onChange={handleChange}
        />
      </span>
      <button onClick={handleAddProduct}>Add</button>
    </div>
  );
};

export default AddProduct;
