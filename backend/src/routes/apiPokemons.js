const router = require("express").Router();
const PokemonsModel = require("../models/PokemonsModel");
const PcModels = require("../models/pokedexModel");
axios = require("axios");

router.route("/:id").get((req, res) => {
  PokemonsModel.find({})
    .sort({ id: 1 })
    .then(async (pokemons) => {
      let list = [];
      for (const pokemon of pokemons) {
        await PcModels.findOne({ id: pokemon.id }).then((pcpok) => {
          if (pcpok !== null) {
            pokemon.catched = true;
          }
          list.push(pokemon);
          console.log(pokemon);
        });
      }
      const message = "La liste des pokémons a bien été récupéré";
      res.json({ message, pokemons: list });
    })
    .catch((error) => {
      const message =
        "La liste des pokémons n'a pas pu être récupérée. Réessayer dans quelques instants";
      res.status(500).json({ message, data: error });
    });
});

module.exports = router;
