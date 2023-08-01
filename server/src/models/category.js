const mongoose = require('mongoose');
require("../db/mongoose")

const categoryShecma = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }

})

categoryShecma.set('toObject', { virtuals: true })
categoryShecma.set('toJSON', { virtuals: true })

categoryShecma.virtual('subCategories', {
    ref: 'SubCategory',
    localField: '_id',
    foreignField: 'category'
})

const Category = mongoose.model("Category", categoryShecma)

module.exports = Category