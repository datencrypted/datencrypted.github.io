const userModel = require("../models/userModel");
const { protect } = require("../middleware/authMiddleware");

module.exports = (app) => {
  app.get("/items", protect, (req, res) => {
    const username = req.user.username;
    //get all items from user.items
    userModel
      .findOne({ username: username })
      .then((user) => {
        const items = user.items;
        const message = "Here is your items";
        res.json({ message, items: items });
      })
      .catch((err) => res.json(err));
  });
};
