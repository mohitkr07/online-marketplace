const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
const searchRouter = require("./src/routes/search")
const userRoute = require("./src/routes/user");
const sellerRoute = require("./src/routes/seller");
const port = process.env.PORT || 4500;

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(searchRouter);
app.use(userRoute);
app.use(sellerRoute);

app.listen(port, () => {
  console.log("Server is running on port", port);
});

const Product = require("./src/models/product");
const Seller = require("./src/models/seller");
const Category = require("./src/models/category")
const SubCategory = require("./src/models/subCat")

const main = async () => {
  const category = await Category.findById("64c82d4f2d3c8a820ae761f7")
  await category.populate('subCategories')
  console.log(category)
};

// main();
