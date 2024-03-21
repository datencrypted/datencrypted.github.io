const PokemonsModel = require("../models/PokemonsModel");
const userModel = require("../models/userModel");
const { protect } = require("../middleware/authMiddleware");

module.exports = (app) => {
  app.get("/pokemon/:id", protect, (req, res) => {
    const username = req.user.username;
    // req.params.id is the id of the pokemon
    const id = req.params.id;
    // fetch pokemon from database
    PokemonsModel.findOne({ id })
      .then((pokemon) => {
        // fetch user from database
        userModel
          .findOne({ username: username })
          .then((user) => {
            // check if pokemon is in user.pc
            const pc = user.pc;
            const pcIds = pc.map((pokemon) => pokemon.id);
            if (pcIds.includes(pokemon.id)) {
              pokemon.catched = true;
            }
            //function randomize shiny possibility
            var shiny = Math.floor(Math.random() * 8192) + 1;
            if (shiny <= 1) {
              pokemon.shiny = true;
              pokemon.picture = pokemon[0].picture.replace(
                "pokemon",
                "pokemon/shiny"
              );
            } else {
              pokemon.shiny = false;
            }
            // send pokemon to frontend
            const message = "Here is the pokemon";
            res.json({ message, pokemon });
          })
          .catch((err) => res.json(err));
      })
      .catch((err) => res.json(err));
  });
};
