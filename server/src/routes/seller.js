const express = require("express");
const router = express.Router();
const Seller = require("../models/seller");
const Product = require("../models/product");
const auth = require("../middleware/sellerAuth");

router.get("/api/seller", auth, async (req, res) => {
  try {
    const seller = req.seller;
    res.send({ message: true, seller });
  } catch (e) {
    res.status(500).send({ message: false });
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

    const token = await seller.generateAuthToken();
    res.cookie("sellerToken", token, {
      httpOnly: true,
      expires: new Date(Date.now() + 86400 * 1000),
    });

    res.send({ seller, message: true });
  } catch (e) {
    res.status(500).send({ message: false });
  }
});

router.get("/api/seller/verify", auth, async (req, res) => {
  try {
    res.status(200).send({ message: true });
  } catch (e) {
    res.status(500).send({ message: false });
  }
});

router.get("/api/seller/logout", auth, async (req, res) => {
  try {
    console.log(req.seller.tokens);
    req.seller.tokens = req.seller.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.seller.save();
    res.status(202).send({ message: true });
  } catch (e) {
    res.status(500).send(e);
  }
});
router.get("/api/seller/logoutall", auth, async (req, res) => {
  try {
    req.seller.tokens = [];
    await req.seller.save();
    res.status(202).send({ message: true });
  } catch (e) {
    res.status(500).send(e);
  }
});

// product API

// {
//   categoryName: "",
//   name: "",
//   price: "",
//   description: "",
//   category: "",
//   subcategoryName: "",
//   subcategory_id: "",
// }

router.post("/api/addproduct", auth, async (req, res) => {

  const product = new Product({ ...req.body, owner: req.seller._id });
  try {
    await product.save();

    res.status(201).send({ message: true, product });
  } catch (e) {
    res.status(500).send(false);
  }
});

// router.get("/api/products", auth, async (req, res) => {
//   const seller = await Seller.findById(req.seller._id).populate('products')
//   try {
//     seller.products.forEach(async (product) => {
//       await product.populate('category')
//     });
//     console.log(seller.products)
//     res.status(201).send(seller.products);
//   } catch (e) {
//     res.status(500).send(e);
//   }
// });

router.get("/api/products", auth, async (req, res) => {
  try {
    const seller = await Seller.findById(req.seller._id).populate("products");

    // Use Promise.all with map to wait for all populate operations to complete
    await Promise.all(
      seller.products.map(async (product) => {
        await product.populate("subCategory");
      })
    );

    // console.log(seller.products);
    res.status(201).send(seller.products);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete('/api/deleteproduct/:id', auth, async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findByIdAndDelete(id);

    res.status(200).send(product)
  } catch (e) {
    res.status(500).send({ message: "something went wrong" })
  }
})

module.exports = router;
