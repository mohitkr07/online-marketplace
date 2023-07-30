const express = require("express");
const router = express.Router();
const Seller = require("../models/seller");
const Product = require("../models/product");
const auth = require("../middleware/sellerAuth");

router.get("/api/seller", auth, async (req, res) => {
  try {
    const seller = req.seller;
    res.send({ message: "success", seller });
  } catch (e) {
    res.status(500).send();
  }
});

router.post("/api/addproduct", async (req, res) => {
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

router.post("/seller/login", async (req, res) => {
  const cred = req.body;
  try {
    const seller = await Seller.findByEmail(cred.email, cred.password);
    console.log(seller);

    const token = await seller.generateAuthToken();
    res.cookie("sellerToken", token, {
      httpOnly: true,
      expires: new Date(Date.now() + 86400 * 1000),
    });

    res.send({ seller, message: "success" });
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
