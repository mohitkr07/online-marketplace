import React, { useEffect, useState } from "react";
import styles from "./cards.module.css";

const Product_Card = (props) => {
  //     #57e32c	(87,227,44)
  // #b7dd29	(183,221,41)
  // #ffe234	(255,226,52)
  // #ffa534	(255,165,52)
  // #ff4545

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
    <div className={styles["product-card"]}>
      <div className={styles["product-pic"]}>
        <img src={props.src} />
      </div>
      <div className={styles["product-description"]}>
        <div className={styles["product-name"]}>
          <p>{props.product_name.substr(0, 60)}</p>
        </div>
        <div className={styles["product-rating"]}>
          <span
            style={{ "background-color": rateColor }}
            className={styles["rating"]}
          >
            {props.rating + " "}
            <i class="fa-solid fa-star fa-xs" />
          </span>
          <span style={{ "text-align": "left", color: "grey" }}>
            ({props.ratingCount})
          </span>
        </div>
        <div className={styles["product-price"]}>
          <p style={{ "font-weight": "bold" }}>
            ₹{props.price}{" "}
            <span
              style={{
                color: "grey",
                "text-decoration": "line-through",
                "margin-left": "3px",
                "font-weight": "lighter",
                "font-size": "85%",
              }}
            >
              ₹{props.original}
            </span>
            <span
              style={{
                color: "green",
                "margin-left": "10px",
                "font-weight": "bold",
                "font-size": "90%",
                "font-size": "80%",
              }}
            >
              {Math.ceil(
                ((props.original - props.price) / props.original) * 100
              )}
              % off
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product_Card;
