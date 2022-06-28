const mongoose = require("mongoose");
const PokemonModel = require("../models/pokemons");
mongoose
  .connect("mongodb://localhost:27017/pokedex", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

module.exports = { connect: mongoose.connect, PokemonModel };
