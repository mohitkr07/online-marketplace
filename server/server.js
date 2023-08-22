const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
const searchRouter = require("./src/routes/search")
const userRoute = require("./src/routes/user");
const sellerRoute = require("./src/routes/seller");
const port = process.env.PORT || 3000;

const path = require("path");

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use(searchRouter);
app.use(userRoute);
app.use(sellerRoute);

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"))
})

app.listen(port, () => {
  console.log("Server is running on port", port);
});


