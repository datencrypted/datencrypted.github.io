//pokedex infos
const PokedexModel = require("../models/pokedexModel");
const mockPokemons = require("./mock-pokemons");

//pokemon infos
const PokemonModels = require("../models/PokemonsModel");
const Pokemons = require("./Pokemons");
//Items infos
const ItemsModel = require("../models/ItemsModel");
const mockItems = require("./mock-items");

function initiate() {
  // if pokemonModels is empty then fill it with mock data
  PokemonModels.find({})
    .then((pokemonModels) => {
      if (pokemonModels.length === 0) {
        Pokemons.forEach((pokemon) => {
          PokemonModels.create(pokemon);
        });
        console.log("Pokemons data loaded");
      } else {
        console.log("PokemonModels initiated.");
      }
    })
    .catch((err) => console.log(err));
}

initiate();
