const ApiModel = require("../models/PokemonsModel");

module.exports = (app) => {
  app.post("/api/pokemons/fetch", (req, res) => {
    ApiModel.find({ ...req.body })
      .sort({ id: 1 })
      .then((pokemons) => {
        res.json(pokemons);
      });
  });
};
