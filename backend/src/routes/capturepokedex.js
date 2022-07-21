const Pokemons = require("../models/PokemonsModel");
const Pokedex = require("../models/pokedexModel");

module.exports = (app) => {
  app.get("/api/pokedex/update", async (req, res) => {
    await Pokedex.find()
      .then((pokemons) => {
        pokemons.forEach(async (pokemon) => {
          await Pokemons.findOneAndUpdate(
            { id: pokemon.id },
            {
              $set: {
                catched: true,
              },
            }
          )
            .then((pokemon) => {
              console.log("pokemon n°" + pokemon.id + "updated");
            })
            .catch((err) => {
              console.log(err);
            });
        });
      })
      .then(() => {
        res.json("pokedex updated");
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
