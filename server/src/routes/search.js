const express = require("express")
const router = new express.Router()
const Product = require("../models/product")
const Category = require("../models/category")
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

router.post("/api/addcategory", async (req, res) => {
    const categories = req.body.categories;
    try {
        categories.forEach(i => {
            console.log(i)
            const category = new Category({ name: i })
            category.save();
        });
        res.send("category added")
    } catch (e) {
        res.status(500).send(e)
    }
})



module.exports = router