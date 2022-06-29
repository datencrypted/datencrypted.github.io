const PokemonModel = require("../models/pokemons");

module.exports = (app) => {
  app.delete("/api/pokemons/:id", (req, res) => {
    PokemonModel.findOneAndDelete({ id: req.params.id })
      .then((pokemon) => {
        res.json(pokemon);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
