const mongoose = require('mongoose');
require("../db/mongoose")

const subCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }
})

const SubCategory = mongoose.model('SubCategory', subCategorySchema)

module.exports = SubCategory