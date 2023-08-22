import { React, Fragment } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/home/home";
import Search from "./components/search/search";
import Profile from "./components/user/profile";
import MaksFooter from "./components/utils/maksFooter";
import SellerPage from "./components/seller/sellerPage";
import SellerDash from "./components/seller/sellerDash/sellerDash";
import ProductPage from "./product/productPage";
import './App.css'

const App = () => {

  return (
    <>
      <div className={["container"]}>
        <Fragment>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/search" element={<Search />} />
              <Route exact path="/user" element={<Profile />} />
              <Route exact path="/citypage" element={<SellerPage />} />
              <Route exact path="/sellerdash" element={<SellerDash />} />
              <Route exact path="/search/productPage" element={<ProductPage />} />
            </Routes>
            <MaksFooter />
          </BrowserRouter>
        </Fragment>
      </div>
    </>
  );
};

export default App;
