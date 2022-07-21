const Pokedex = require("../models/pokedexModel");
const Pokemons = require("../models/PokemonsModel");
const axios = require("axios");
const Items = require("../models/ItemsModel");
const { response } = require("express");

// create a new pokemon

// post method to add pokemon to database (createPokemon)
module.exports = (app) => {
  app.post("/api/pokemons/catch/:id", (req, res) => {
    const pokeball = req.body.pokeball;
    console.log(req.body);
    const shiny = req.body.shiny;
    Items.findOne({ name: pokeball }).then((item) => {
      if (item.quantity > 0) {
        Items.findOneAndUpdate(
          { name: pokeball },
          { quantity: item.quantity - 1 }
        ).then((item) => {
          console.log("you used one " + item.name);
        });

        var n = 0;
        switch (pokeball) {
          case "Pokeball":
            n = Math.floor(Math.random() * 255) + 1;
            break;
          case "Greatball":
            n = Math.floor(Math.random() * 200) + 1;
            break;
          case "Ultraball":
            n = Math.floor(Math.random() * 150) + 1;
            break;
          case "Masterball":
            n = Math.floor(Math.random() * 0) + 1;
            break;
          default:
            n = Math.floor(Math.random() * 255) + 1;
            break;
        }
        axios
          .get(
            "https://pokeapi.co/api/v2/pokemon-species/" + req.params.id + "/"
          )
          .then((response) => {
            if (n < response.data.capture_rate) {
              const message = "You caught a " + response.data.name + "!";
              const { id } = req.params;
              Pokemons.findOne({ id: id })
                .then((pokemon) => {
                  const newPokemon = {
                    name: pokemon.name,
                    id: pokemon.id,
                    picture: pokemon.picture,
                    shiny: shiny,
                    types: pokemon.types,
                    catched: true,
                  };
                  Pokedex.create(newPokemon).then((pokemon) => {
                    res.json({ message: message, pokemon });
                  });
                })
                .catch((err) => {
                  res.json(err);
                });
            } else {
              const message = "The " + response.data.name + " broke free!";
              res.json({ message: message });
            }
          })
          .catch((err) => {
            res.json(err);
          })
          .catch((err) => {
            res.json(err);
          });
      } else {
        res.json({ message: "You don't have any pokeballs!" });
      }
    });
  });
};
