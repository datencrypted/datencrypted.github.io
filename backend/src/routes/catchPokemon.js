const Pokedex = require("../models/pokemons");
const Pokemons = require("../models/PokemonModels");
const axios = require("axios");
const { response } = require("express");
// create a new pokemon

// post method to add pokemon to database (createPokemon)
module.exports = (app) => {
  app.post("/api/pokemons/:name", (req, res) => {
    const pokeball = req.body.pokeball;
    var n = 0;
    switch (pokeball) {
      case "pokeball":
        n = Math.floor(Math.random() * 255) + 1;
        break;
      case "greatball":
        n = Math.floor(Math.random() * 200) + 1;
        break;
      case "ultraball":
        n = Math.floor(Math.random() * 150) + 1;
        break;
      case "masterball":
        n = Math.floor(Math.random() * 0) + 1;
        break;
      default:
        n = Math.floor(Math.random() * 255) + 1;
        break;
    } // end switch
    console.log(n);
    Catch = axios
      .get("https://pokeapi.co/api/v2/pokemon-species/" + req.params.name + "/")
      .then((response) => {
        console.log(response.data.capture_rate);
        if (n < response.data.capture_rate) {
          const message = "You caught a " + req.params.name + "!";
          const { name } = req.params;
          Pokemons.findOne({ name: name })
            .then((pokemon) => {
              Pokedex.create({ name: pokemon.name, url: pokemon.url });
              res.json({ message: message, pokemon });
            })
            .catch((err) => {
              res.json(err);
            });
        } else {
          const message = "The " + req.params.name + " broke free!";
          res.json({ message: message });
        }
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
