const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const mockItems = require("../db/mock-items");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { protect } = require("../middleware/authMiddleware");

// GENERATE JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

router.route("/:id").get((req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((users) => res.json(users.username + " deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").put((req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (req.body.username) {
        user.username = req.body.username;
      }
      if (req.body.email) {
        user.email = req.body.email;
      }
      if (req.body.password) {
        user.password = req.body.password;
      }
      user
        .save()
        .then(() => res.json(user.username + " updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/register").post(async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const Items = mockItems;
  const newUser = new User({ username, email, password, items: Items });
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  newUser.password = hashedPassword;
  newUser
    .save()
    .then((user) =>
      res.json({
        username: user.username,
        message: "Account created successfully",
        token: generateToken(newUser._id),
      })
    )
    // handle duplicate key error with mongoose-unique-validator
    .catch((err) => res.status(400).json(err.errors));
});

router.route("/login").post(async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = await User.findOne({ username: username }).catch((err) => {
    res.status(400).json("Error: " + err);
  });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(201).json({
      _id: user._id,
      username: user.username,
      token: generateToken(user._id),
      message: "Welcome back " + user.username + ".",
    });
  } else {
    res.status(400).json({ message: "Invalid Credentials" });
  }
});

module.exports = router;
