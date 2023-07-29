const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
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

app.use(bodyParser.urlencoded({ extended: false }));

app.use(userRoute);
app.use(sellerRoute);

app.listen(port, () => {
  console.log("Server is running on port", port);
});
