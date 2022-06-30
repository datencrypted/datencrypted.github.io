const mongoose = require("mongoose");

//pokedex infos
const PokedexModel = require("../models/pokemons");
const mockPokemons = require("./mock-pokemons");

//pokemon infos
const PokemonModels = require("../models/PokemonModels");
const Pokemons = require("./Pokemons");

mongoose
  .connect("mongodb://localhost:27017/pokedex", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));
function initiate() {
  //if pokedex is empty then fill it with mock data
  PokedexModel.find({}).then(
    (pokedex) => {
      if (pokedex.length === 0) {
        mockPokemons.forEach((pokemon) => {
          PokedexModel.create(pokemon);
        });
        console.log("Pokedex filled with mock data");
      } else {
        console.log("Pokedex already initiated");
      }
    },
    // if pokemonModels is empty then fill it with mock data
    PokemonModels.find({}).then((pokemonModels) => {
      if (pokemonModels.length === 0) {
        Pokemons.forEach((pokemon) => {
          PokemonModels.create(pokemon);
        });
        console.log("PokemonModels filled with mock data");
      } else {
        console.log("PokemonModels already initiated");
      }
    })
  );
}

initiate();
