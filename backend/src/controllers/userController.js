// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// const asyncHandler = require("express-async-handler");
// const User = require("../models/userModel");

// // @desc Register a new user
// // @route POST "/api/users"
// // @access Public
// const registerUser = asyncHandler(async (req, res) => {
//   const { username, email, password } = req.body;
//   if (!username || !email || !password) {
//     res.status(400).json({ message: "Please complete all fields" });
//   }

//   //Check if user exists
//   const userExists = await User.findOne({ email: email, username: username });

//   if (userExists) {
//     res.status(400).json({ message: "This email or username already exists!" });
//   } else {
//     //Hash Password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     //Create the User
//     const user = await User.create({
//       username,
//       email,
//       password: hashedPassword,
//     });

//     if (user) {
//       res.status(201).json({
//         _id: user.id,
//         username: user.username,
//         email: user.email,
//         token: generateToken(user._id),
//       });
//     } else {
//       res.status(400).json({ message: "Invalid User Data!" });
//     }
//   }
// });

// // @desc Authenticate a user
// // @route POST "/api/users/login"
// // @access Public
// const loginUser = asyncHandler(async (req, res) => {
//   const { username, password } = req.body;

//   const user = await User.findOne({ username: username });

//   if (user && (await bcrypt.compare(password, user.password))) {
//     res.status(201).json({
//       _id: user.id,
//       username: user.username,
//       token: generateToken(user._id),
//     });
//   } else {
//     res.status(400).json({ message: "Invalid Credentials" });
//   }
// });

// // @desc Get user data
// // @route GET "/api/users/me"
// // @access Private
// const getMe = asyncHandler(async (req, res) => {
//   const { _id, username } = await User.findById(req.user.id);

//   res.status(200).json({
//     id: _id,
//     username,
//     email,
//   });
// });

// // GENERATE JWT
// const generateToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, {
//     expiresIn: "1000",
//   });
// };
// module.exports = {
//   registerUser,
//   loginUser,
//   getMe,
// };
