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
    console.log(data)
    setProducts(data);
  };

  const deleteProduct = async (id) => {
    const res = await fetch(`/api/deleteproduct/${id}`, {
      method: 'delete',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json();
    console.log(data)
  }

  const [warning, setWarning] = useState(false);
  const [toRemove, setToRemove] = useState("");
  const [toRemoveName, setToRemoveName] = useState("")

  const handleRemove = async () => {
    await deleteProduct(toRemove);
    await fetchProducts();
    setWarning(false);
  }
  const handleRemove2 = (e) => {
    if (e.target == e.currentTarget) {
      setWarning(false)
    }
  }

  let srNo = 1;
  return (
    <>
      {warning && <div onClick={handleRemove2} className={styles["warning-div"]}>
        <div className={styles["warning-modal"]}>
          <p>Are you sure want to remove {toRemoveName}?</p>
          <div><button onClick={handleRemove}>Yes</button> <button onClick={() => setWarning(false)}>No</button></div>
        </div>
      </div>}
      <div className={styles["my-products"]}>
        <h2>My Products</h2>
        <table className={styles["my-products-table"]}>
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Name</th>
              <th>Price</th>
              <th>Compare Price</th>
              <th>Type</th>
              <th>Product Link</th>
              <th>Remove</th>
            </tr>
            {products.map((product, key) => (
              <tr key={key}>
                <td>{srNo++}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.comparePrice}</td>
                <td>{product.subCategory.name}</td>
                <td>
                  <a href="#">view</a>
                </td>
                <td><button
                  onClick={() => { setToRemove(product._id); 
                    setToRemoveName(product.name);
                    setWarning(true) }
                  }
                  className={styles["remove-button"]}
                >Remove</button>
                </td>
              </tr>
            ))}
          </thead>
        </table>
      </div>
    </>
  );
};

export default MyProducts;
