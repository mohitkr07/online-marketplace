const express = require("express");
const router = new express.Router();
const User = require("../models/user");
const sendMail = require("../config/sendMail");

require("dotenv").config();

router.get("/api/user", async (req, res) => {
  res.send("hi");
});

router.get("/mail", sendMail);

router.post("/api/signup", async (req, res) => {
  const user = new User(req.body);
  try {
    user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(500).send("There is something error");
  }
});

module.exports = router;
