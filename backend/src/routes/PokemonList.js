const Pokemons = require("../models/PokemonsModel");

module.exports = (app) => {
  app.get("/api/pokemons", (req, res) => {
    Pokemons.find()
      .sort({ _id: 1 })
      .then((pokemons) => {
        res.json(pokemons);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
