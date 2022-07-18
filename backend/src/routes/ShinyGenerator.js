const ApiModel = require("../models/PokemonsModel");
const pokemonfetch = require("../routes/PokemonsFetch");

module.exports = (app) => {
  app.post("/api/pokemons/randomizer", async (req, res, next) => {
    for (let i = 1; i <= 151; i++) {
      var picture = Math.floor(Math.random() * 151) + 1;
      var shiny = null;
      if (picture < 150) {
        picture =
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
          i +
          ".png";
      } else {
        picture =
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" +
          i +
          ".png";
        shiny = "Shiny";
      }

      ApiModel.findOneAndUpdate(
        { id: i },
        { picture: picture, shiny: shiny }
      ).then(console.log("pokemon n°" + i + "updated"));
    }
    ApiModel.find({ ...req.body }).then((pokemons) => {
      res.json(pokemons);
    });
  });
};
