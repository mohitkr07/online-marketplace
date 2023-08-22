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

subCategorySchema.set('toObject', { virtuals: true })
subCategorySchema.set('toJSON', { virtuals: true })

subCategorySchema.virtual('products', {
    ref: 'Product',
    localField: '_id',
    foreignField: 'subCategory'
})

const SubCategory = mongoose.model('SubCategory', subCategorySchema)

module.exports = SubCategory