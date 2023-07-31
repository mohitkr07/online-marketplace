import { useEffect, useState } from "react";
import styles from "./sellerDash.module.css";

const MyProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, [1]);

  const fetchProducts = async () => {
    const res = await fetch("/api/products", {
      method: "get",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setProducts(data);
  };

  let srNo = 1;
  return (
    <div className={styles["my-products"]}>
      <h2>My Products</h2>
      <table className={styles["my-products-table"]}>
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Product Link</th>
          </tr>
          {products.map((product, key) => (
            <tr key={key}>
              <td>{srNo++}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>
                <a href="#">view</a>
              </td>
            </tr>
          ))}
        </thead>
      </table>
    </div>
  );
};

export default MyProducts;
