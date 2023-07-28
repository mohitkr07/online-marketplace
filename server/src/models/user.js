const mongoose = require("mongoose");
require("../db/mongoose");
const validator = require("validator");

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
        throw new Error("Invalid Email");
      }
    },
  },
  mobile: {
    type: String,
    required: true,
    trim: true,
    unique: true,
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
  { unique: true, sparse: true, partialFilterExpression: { email: { $type: "string" } } }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
// const userSchema = new mongoose.Schema({
//   firstName: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   lastName: {
//     type: String,
//     trim: true,
//   },
//   email: {
//     type: String,
//     trim: true,
//     unique: true,
//     sparse: true,
//     validate(value) {
//       if (!validator.isEmail(value)) {
//         throw new Error("Invalid Email");
//       }
//     },
//   },
//   mobile: {
//     type: String,
//     required: true,
//     trim: true,
//     unique: true,
//   },
//   tokens: [
//     {
//       token: {
//         type: String,
//       },
//     },
//   ],
// });

// const User = mongoose.model("User", userSchema);
