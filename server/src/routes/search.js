const express = require("express")
const router = new express.Router()
const Product = require("../models/product")
const Category = require("../models/category")
const SubCategory = require('../models/subCat')
const Seller = require("../models/seller")

const auth = require("../middleware/sellerAuth")


router.get("/api/search", async (req, res) => {
    res.send("hi")
})

router.get("/api/getcategories", auth, async (req, res) => {
    try {
        const categories = await Category.find({});
        res.status(200).send({ message: true, categories })
    } catch (e) {
        res.status(500).send({ error: "something bad happened" })
    }
})

router.post("/api/getsubcat", auth, async (req, res) => {
    const cat = req.body.cat;
    // console.log(cat)
    try {
        const category = await Category.findById({ _id: cat })
        await category.populate('subCategories')

        res.status(200).send({message: true, subCat: category.subCategories })
    } catch (e) {
        res.status(500).sen({ error: "something went wrong" })
    }
})



// only for developer

router.post("/api/addcategory", async (req, res) => {
    const categories = req.body.categories;
    try {
        categories.forEach(i => {
            const category = new Category({ name: i })
            category.save();
        });
        res.send("category added")
    } catch (e) {
        res.status(500).send(e)
    }
})

router.post("/api/addsubcategories", async (req, res) => {
    const allcategories = req.body
    try {
        allcategories.forEach(async ithcat => {
            const category = await Category.findOne({ name: ithcat.category });
            // console.log(category._id)
            const subcategories = ithcat.subcategories;
            // console.log(subcategories)
            subcategories.forEach(async subcat => {
                const cat = new SubCategory({ name: subcat, category: category._id })
                await cat.save()
            })
        })


        res.send("subcat added successfully")
    } catch (e) {
        res.status(500).send(e)
    }
})




module.exports = router