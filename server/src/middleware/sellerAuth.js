const jwt = require("jsonwebtoken");
const Seller = require("../models/seller");
require("dotenv").config();

const SellerAuth = async (req, res, next) => {
  const token = req.cookies.sellerToken;
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY2);
    const seller = await Seller.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });

    if (!seller) {
      throw new Error("Please Authenticate");
    }

    req.seller = seller;
    req.token = token;

    next();
  } catch (error) {
    // Handle the error gracefully and pass it to the error-handling middleware
    return res.status(401).json({message: false});
  }
};

module.exports = SellerAuth;

// const jwt = require("jsonwebtoken");
// const Seller = require("../models/seller");
// require("dotenv").config();

// const SellerAuth = async (req, res, next) => {
//   const token = req.cookies.sellerToken;
//   const decoded = jwt.verify(token, process.env.SECRET_KEY2);

//   const seller = await Seller.findOne({
//     _id: decoded._id,
//     "tokens.token": token,
//   });
//   console.log(seller);

//   if (!seller) {
//     throw new Error({ error: "Please Authenticate" });
//   }

//   req.seller = seller;
//   req.token = token;

//   next();
// };

// module.exports = SellerAuth;
