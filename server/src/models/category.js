const mongoose = require('mongoose');
require("../db/mongoose")

const categoryShecma = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }

})

const Category = mongoose.model("Category", categoryShecma)

module.exports = Category