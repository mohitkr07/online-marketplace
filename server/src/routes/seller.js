const express = require("express");
const router = express.Router();
const Seller = require("../models/seller");
const Product = require("../models/product");

router.get("/seller/", async (req, res) => {
  res.send("seller");
});

router.post("/addproduct", async (req, res) => {
  const product = new Product(req.body);
  try {
    product.save();
    res.send(product);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post("/seller/register", async (req, res) => {
  const seller = new Seller(req.body);
  try {
    seller.save();
    res.send(seller);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
