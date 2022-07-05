const PokemonModel = require("../models/pokedexModel");

module.exports = (app) => {
  app.delete("/api/pokemons/:name", (req, res) => {
    PokemonModel.findOneAndDelete({ name: req.params.name })
      .then((pokemon) => {
        const message = `${pokemon.name} was deleted`;
        res.json({ message: message, pokemon });
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
