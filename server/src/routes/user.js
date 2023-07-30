const express = require("express");
const router = new express.Router();
const User = require("../models/user");
const sendMail = require("../config/sendMail");
const Auth = require("../middleware/userAuth");

require("dotenv").config();

// router.get("/mail", sendMail);

router.get("/api/user", Auth, async (req, res) => {
  try {
    const user = req.user;
    res.send({ user });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/api/signup", async (req, res) => {
  const user = new User(req.body);
  try {
    user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(500).send("There is something error");
  }
});

router.post("/api/login", async (req, res) => {
  const cred = req.body;
  try {
    const user = await User.findByMobile(cred.mobile, cred.password);

    const token = await user.generateAuthToken();
    res.cookie("userJWT", token, {
      httpOnly: true,
    });

    res.send({
      message: "success",
    });
  } catch (e) {
    res.status(500).send({ message: "Unable to Login" });
  }
});

router.get("/api/logout", Auth, async (req, res) => {
  try {
    console.log("called");
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send();
  }
});

router.put("/api/user", Auth, async (req, res) => {
  const reqChanges = Object.keys(req.body);

  try {
    const user = req.user;
    reqChanges.forEach((change) => {
      user[change] = req.body[change];
    });
    await user.save();
    res.send(user);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
