import React from "react";
import styles from "./cards.module.css";
import styles1 from "./product.module.css";

const Product_type2 = () => {
  return (
    <div className={styles1["product-2"]}>
      <div className={styles1["product-2-content"]}>
        <div className={styles1["product-2-imagine"]}>
          <img src="images/category/sample5.webp" />
        </div>
        <div className={styles1["product-2-description"]}>
          <div className={styles1["product-2-name"]}>
            <h3>Adsun 80 cm (32 inch) HD Ready LED TV</h3>
          </div>
          <div className={styles1["product-2-rating"]}>
            <span className={`${styles["rating"]} ${styles1["rating"]}`}>3.9 <i class="fa-solid fa-star fa-xs" /></span>
            <span className={styles1["rating-count"]}>19,279 Ratings</span>
          </div>
          <div className={styles1["product-2-features"]}>
            <ul className={styles1["feature-list"]}>
              <li>HD Ready 1366 x 768 Pixels</li>
              <li>1 Year Warranty on Product</li>
            </ul>
          </div>
        </div>
        <div className={styles1["product-2-cost"]}>
          <div className={styles1["product-2-cost-details"]}>
            <div className={styles1["product-2-price"]}>
              <h2>₹6,999</h2>
            </div>
            <div className={styles1["product-2-discounts"]}>
              <span>
                <p
                  style={{
                    "margin-right": "10px",
                    "text-decoration": "line-through",
                    color: "rgb(150, 150, 150)",
                    "font-weight": "lighter",
                    "font-size": "95%"
                  }}
                >
                  ₹16,999
                </p>
                <p style={{ "font-size": "75%", color: "green", "font-weight": "bold"}}>58% off</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product_type2;
