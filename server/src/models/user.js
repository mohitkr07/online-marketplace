const mongoose = require("mongoose");
require("../db/mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

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

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
