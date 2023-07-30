const jwt = require("jsonwebtoken");
const Seller = require("../models/seller");
require("dotenv").config();

const SellerAuth = async (req, res, next) => {
  const token = req.cookies.sellerToken;
  const decoded = jwt.verify(token, process.env.SECRET_KEY2);

  const seller = await Seller.findById({ _id: decoded._id });

  if (!seller) {
    const err = new Error("Please Authenticate");
    next(err);
  }

  req.seller = seller;
  req.token = token;

  next();
};

module.exports = SellerAuth;
