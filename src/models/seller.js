const mongoose = require("mongoose");
const Product = require("./product");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

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
  tokens: [
    {
      token: {
        type: String,
      },
    },
  ],
});

sellerSchema.set("toObject", { virtuals: true });
sellerSchema.set("toJSON", { virtuals: true });

sellerSchema.virtual("products", {
  ref: "Product",
  localField: "_id",
  foreignField: "owner",
});

sellerSchema.methods.generateAuthToken = async function () {
  const seller = this;

  const token = jwt.sign(
    { _id: seller._id.toString() },
    process.env.SECRET_KEY2
  );

  seller.tokens = seller.tokens.concat({ token });

  await seller.save();

  return token;
};

sellerSchema.methods.toJSON = function () {
  const seller = this;

  const publicObject = seller.toObject();

  delete publicObject.tokens;
  delete publicObject.password;

  return publicObject;
};

sellerSchema.statics.findByEmail = async function (email, password) {
  const seller = await Seller.findOne({ email });

  if (!seller) {
    throw new Error({ error: "Invalid Credentials" });
  }
  const isMatch = await bcrypt.compare(password, seller.password);

  if (!isMatch) {
    throw new Error({ error: "Invalid Credentials" });
  }
  return seller;
};

sellerSchema.pre("save", async function (next) {
  const seller = this;
  if (seller.isModified("password")) {
    seller.password = await bcrypt.hash(seller.password, 8);
  }
  next();
});

const Seller = mongoose.model("Seller", sellerSchema);

module.exports = Seller;
