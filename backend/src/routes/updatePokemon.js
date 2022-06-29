// update pokemon
const PokemonModel = require("../models/pokemons");

module.exports = (app) => {
  app.put("/api/pokemons/:id", (req, res) => {
    PokemonModel.findOneAndUpdate({ id: req.params.id }, req.body, {
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
