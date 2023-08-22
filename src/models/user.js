const mongoose = require("mongoose");
require("../db/mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    validate(value) {
      if (value && !validator.isEmail(value)) {
        throw new Error({ error: "Invalid Email" });
      }
    },
  },
  mobile: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  gender: {
    type: String,
  },
  password: {
    type: String,
    require: true,
    triem: true,
    minlength: [6, "Password cannot be of less than 6 characters"],
  },
  tokens: [
    {
      token: {
        type: String,
      },
    },
  ],
});

// Create a compound index for email and mobile fields
userSchema.index(
  { email: 1 },
  {
    unique: true,
    sparse: true,
    partialFilterExpression: { email: { $type: "string" } },
  }
);

userSchema.methods.generateAuthToken = async function () {
  const user = this;

  const token = jwt.sign({ _id: user._id.toString() }, process.env.SECRET_KEY);

  user.tokens = user.tokens.concat({ token });
  await user.save();

  return token;
};

userSchema.methods.toJSON = function () {
  const user = this;

  const publicProfile = user.toObject();

  delete publicProfile.password;
  delete publicProfile.tokens;

  return publicProfile;
};

userSchema.statics.findByEmail = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error({ error: "Invalid Credentials" });
  }
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error({ error: "Invalid Credentials" });
  }

  return user;
};

userSchema.statics.findByMobile = async (mobile, password) => {
  const user = await User.findOne({ mobile });

  if (!user) {
    throw new Error({ error: "Invalid Credentials" });
  }
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error({ error: "Invalid Credentials" });
  }

  return user;
};

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
