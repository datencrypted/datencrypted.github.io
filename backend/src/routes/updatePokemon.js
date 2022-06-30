// update pokemon
const PokemonModel = require("../models/pokemons");

module.exports = (app) => {
  app.put("/api/pokemons/:name", (req, res) => {
    PokemonModel.findOneAndUpdate({ name: req.params.name }, req.body, {
      new: true,
    })
      .then((pokemon) => {
        res.json(pokemon);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
