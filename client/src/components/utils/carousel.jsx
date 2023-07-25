import React from "react";
import styles from "./utils.module.css";
import SimpleImageSlider from "react-simple-image-slider";

const Carousel = () => {
  const images = [
    { url: "images/carousel/1.jpg" },
    { url: "images/carousel/2.jpg" },
    { url: "images/carousel/3.jpg" },
    { url: "images/carousel/4.jpg" },
    { url: "images/carousel/5.jpg" },
    { url: "images/carousel/6.jpg" },
    { url: "images/carousel/7.jpg" },
  ];

  return (
    <div className={styles["carousel"]}>
      <SimpleImageSlider
        width="99%"
        height={400}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
};

export default Carousel;
