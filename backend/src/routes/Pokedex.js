const PokemonModel = require("../models/pokemons");

module.exports = (app) => {
  app.get("/api/pokedex", (req, res) => {
    PokemonModel.find()
      .sort({ id: 1 })
      .then((pokemons) => {
        res.json(pokemons);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
