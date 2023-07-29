import styles from "./sellerDash.module.css";

const MyProducts = () => {
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
            <th>Description</th>
          </tr>
          <tr>
            <td>1</td>
            <td>cover</td>
            <td>40</td>
            <td>Electronics</td>
            <td>link</td>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default MyProducts;
