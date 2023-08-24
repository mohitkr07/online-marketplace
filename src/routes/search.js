const express = require("express")
const router = new express.Router()
const Product = require("../models/product")
const Category = require("../models/category")
const SubCategory = require('../models/subCat')
const Seller = require("../models/seller")

const auth = require("../middleware/sellerAuth")
const zlib = require("zlib")


router.get("/api/search/:term", async (req, res) => {
    const term = req.params.term;
    try {
        const subcategories = await SubCategory.find({ name: { $regex: term, $options: 'i' } });

        let response = [];
        // Tip: Use for...of loop to ensure sequential execution of async operations
        for (const subcat of subcategories) {
            await subcat.populate('products');
            response = response.concat(subcat.products)
        }

        if (response.length == 0) {
            const categories = await Category.find({ name: { $regex: term, $options: 'i' } });
            for (const category of categories) {
                await category.populate('products');
                response = response.concat(category.products)
            }
        }

        response.forEach(prod => {
            prod.image = zlib.unzipSync(prod.image);
        })

        res.send({ message: true, products: response });
    } catch (e) {
        res.status(500).send({ message: "something went wrong" });
    }
})

router.get('/api/categorywise/:category', async (req, res) => {
    const term = req.params.category;
    try {
        // console.log(term);
        let response = [];

        if (response.length == 0) {
            const categories = await Category.find({ name: { $regex: term, $options: 'i' } });
            for (const category of categories) {
                await category.populate('products');
                response = response.concat(category.products)
            }
        }
        response = response.slice(0, 10)

        response.forEach(prod => {
            prod.image = zlib.unzipSync(prod.image);
        })


        res.send({ message: true, products: response })

    } catch (e) {
        res.status(500).send({ message: "something went wrong" })
    }
})


//categories & catalog APIs

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

        res.status(200).send({ message: true, subCat: category.subCategories })
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