import React, { useEffect, useState } from "react";
import styles from "./cards.module.css";
import styles1 from "./product.module.css";

const Product_type1 = (props) => {
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
    <div className={`${styles["product-card"]} ${styles1["product-card"]}`}>
      <div className={`${styles["product-pic"]} ${styles1["product-pic"]}`}>
        <img src={props.src} />
      </div>
      <div className={`${styles["product-description"]} ${styles1["product-description"]}`}>
        <div className={`${styles["product-name"]} ${styles1["product-name"]}`}>
          <p>{props.product_name.substr(0, 60)}</p>
        </div>
        <div className={styles1["speciality"]}>
            <p>{props.speciality}</p>
        </div>
        <div className={`${styles["product-rating"]} ${styles1["product-rating"]}`}>
          <span
            style={{ "backgroundColor": rateColor }}
            className={styles["rating"]}
          >
            {props.rating + " "}
            <i className="fa-solid fa-star fa-xs" />
          </span>
          <span style={{ "textAlign": "left", color: "grey" }}>
            ({props.ratingCount})
          </span>
        </div>
        <div className={`${styles["product-price"]} ${styles1["product-price"]}`}>
          <p style={{ "fontWeight": "bold" }}>
            ₹{props.price}{" "}
            <span
              style={{
                color: "grey",
                "textDecoration": "lineThrough",
                "marginLeft": "3px",
                "fontWeight": "lighter",
                "fontSize": "85%",
              }}
            >
              ₹{props.original}
            </span>
            <span
              style={{
                color: "green",
                "marginLeft": "10px",
                "fontWeight": "bold",
                "fontSize": "90%",
                "fontSize": "80%",
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

export default Product_type1;
