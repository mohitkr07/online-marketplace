import { React, Fragment } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import styles from "./container.module.css";
import Header from "./utils/header";
import Home from "./home/home";
import MaksFooter from "./utils/maksFooter";

const Container = () => {
  return (
    <div className={styles["container"]}>
      <Header />
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Fragment>
      <MaksFooter />
    </div>
  );
};

export default Container;
