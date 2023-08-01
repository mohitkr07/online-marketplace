const mongoose = require("mongoose");
require("../db/mongoose");
const validator = require("validator");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Category'
  },
  tags: [{ type: String }],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Seller',
  },
});



const Product = mongoose.model("Product", productSchema);

module.exports = Product;
