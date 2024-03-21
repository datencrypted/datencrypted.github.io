const userModel = require("../models/userModel");
const { protect } = require("../middleware/authMiddleware");

module.exports = (app) => {
  app.get("/cheat", protect, (req, res) => {
    const username = req.user.username;
    //add 100 pokeballs to user.items
    userModel.findOne({ username: username }).then((user) => {
      const items = user.items;
      const pokeballIndex = items.findIndex((item) => item.name === "Pokeball");
      const pokeballQuantity = items[pokeballIndex].quantity;
      items.set(pokeballIndex, {
        ...items[pokeballIndex],
        quantity: pokeballQuantity + 100,
      });
      user.save();
      res.json({ message: "100 pokeballs added !" });
    });
  });
};
