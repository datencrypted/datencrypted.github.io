const PokemonModel = require("../models/pokemons");

module.exports = (app) => {
  app.get("/api/pokemons", (req, res) => {
    PokemonModel.find()
      .then((pokemons) => {
        res.json(pokemons);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
