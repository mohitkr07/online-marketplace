const User = require("../models/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const UserAuth = async (req, res, next) => {
  const token = req.cookies.userJWT;
  const decoded = jwt.verify(token, process.env.SECRET_KEY);

  const user = await User.findOne({ _id: decoded._id, "tokens.token": token });

  if (!user) {
    // throw new Error({ message: "Please Authenticate" });
    var err = new Error("Something went wrong");
    next(err);
  }

  req.user = user;
  req.token = token;

  next();
};

module.exports = UserAuth;
