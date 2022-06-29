const PokemonModel = require("../models/pokemons");
// create a new pokemon

// post method to add pokemon to database (createPokemon)
module.exports = (app) => {
  app.post("/api/pokemons", (req, res) => {
    const newPokemon = new PokemonModel({
      ...req.body,
    });
    newPokemon
      .save()
      .then((pokemon) => {
        res.json(pokemon);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
