const mongoose = require("mongoose");
const Product = require("./product");
const bcrypt = require("bcryptjs");

require("../db/mongoose");

const sellerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  address: {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    postalCode: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  password: {
    type: String,
    required: true,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: Product,
    },
  ],
});

sellerSchema.pre("save", async function (next) {
  const seller = this;
  if (seller.isModified("password")) {
    seller.password = bcrypt.hash(seller.password, 8);
  }
  next();
});

const Seller = mongoose.model("Seller", sellerSchema);

module.exports = Seller;
