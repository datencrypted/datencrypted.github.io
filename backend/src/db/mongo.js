const mongoose = require("mongoose");
const PokemonModel = require("../models/pokemons");
const mockPokemons = require("../db/mock-pokemons");
mongoose
  .connect("mongodb://localhost:27017/pokedex", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));
PokemonModel.deleteMany({}, (err) => {
  if (err) {
    console.log(err);
  }
});
PokemonModel.create(mockPokemons, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Pokemons backed up");
});
