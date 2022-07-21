const Pokedex = require("../models/pokedexModel");

module.exports = (app) => {
  app.get("/api/pokedex", (req, res) => {
    Pokedex.find()
      .sort({ id: 1 })
      .then((pokemons) => {
        res.json(pokemons);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
