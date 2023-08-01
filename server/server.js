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

// const Product = require("./src/models/product");
// const Seller = require("./src/models/seller");

// const main = async () => {
  // const product = await Product.findById("64c703131f1e143c2480ae87");
  // await product.populate("owner");
  // console.log(product);

//   const seller = await Seller.findById("64c702671f1e143c2480ae7a").populate(
//     "products"
//   );
//   console.log(seller);
// };

// main();
