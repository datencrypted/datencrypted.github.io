const User = require("../models/userModel");
const { protect } = require("../middleware/authMiddleware");

module.exports = (app) => {
  app.get("/pc", protect, (req, res) => {
    const username = req.user.username;
    //get all pokemons from user.pc
    User.findOne({ username: username })
      .then((user) => {
        const message = "Here is your pc";
        res.json({ message, pc: user.pc });
      })
      .catch((err) => res.json(err));
  });
};
