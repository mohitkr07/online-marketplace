import { React, useState, useEffect } from "react";
import styles from "./cards.module.css";
import styles1 from "./product.module.css";

const Product_type2 = (props) => {
  const [rateColor, setColor] = useState("");

  useEffect(() => {
    colorRate();
  }, []);

  const colorRate = () => {
    const rate = props.rating;
    if (rate >= 4) setColor("rgb(55, 169, 55)");
    else if (rate > 3 && rate < 4) setColor("#6faa0f");
    else if (rate > 2 && rate <= 3) setColor("#d4b714");
    else if (rate > 1 && rate <= 2) setColor("#ffa534");
    else if (rate <= 1) setColor("#ff4545");
  };

  return (
    <div className={styles1["product-2"]}>
      <div className={styles1["product-2-content"]}>
        <div className={styles1["product-2-imagine"]}>
          <img src={props.src} />
        </div>
        <div className={styles1["product-2-description"]}>
          <div className={styles1["product-2-name"]}>
            <h3>{props.product_name}</h3>
          </div>
          <div className={styles1["product-2-rating"]}>
            <span style={{background: rateColor}} className={`${styles["rating"]} ${styles1["rating"]}`}>
              {props.rating} <i class="fa-solid fa-star fa-xs" />
            </span>
            <span className={styles1["rating-count"]}>
              {props.ratingCount} Ratings
            </span>
          </div>
          <div className={styles1["product-2-features"]}>
            <ul className={styles1["feature-list"]}>
              {props.features.map((i) => {
                return <li>{i}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className={styles1["product-2-cost"]}>
          <div className={styles1["product-2-cost-details"]}>
            <div className={styles1["product-2-price"]}>
              <h2>₹{Intl.NumberFormat("en-US").format(props.price)}</h2>
            </div>
            <div className={styles1["product-2-discounts"]}>
              <span>
                <p
                  style={{
                    "margin-right": "10px",
                    "text-decoration": "line-through",
                    color: "rgb(150, 150, 150)",
                    "font-weight": "lighter",
                    "font-size": "95%",
                  }}
                >
                  ₹{Intl.NumberFormat("en-US").format(props.mrp)}
                </p>
                <p
                  style={{
                    "font-size": "75%",
                    color: "green",
                    "font-weight": "bold",
                  }}
                >
                  {Math.ceil(((props.mrp - props.price) / props.mrp) * 100)}%
                  off
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product_type2;
