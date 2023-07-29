import { React, Fragment } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import styles from "./container.module.css";
import Header from "./utils/header";
import Home from "./home/home";
import Search from "./search/search";
import Profile from "./user/profile";
import MaksFooter from "./utils/maksFooter";
import SellerPage from "./seller/sellerPage";

const Container = () => {
  return (
    <div className={styles["container"]}>
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Header />
                  <Home />
                </>
              }
            />
            <Route
              exact
              path="/search"
              element={
                <>
                  <Header />
                  <Search />
                </>
              }
            />
            <Route
              exact
              path="/user"
              element={
                <>
                  <Header />
                  <Profile />
                </>
              }
            />
            <Route
              exact
              path="/citypage"
              element={
                <>
                  <SellerPage />
                </>
              }
            />
          </Routes>
          <MaksFooter />
        </BrowserRouter>
      </Fragment>
    </div>
  );
};

export default Container;
