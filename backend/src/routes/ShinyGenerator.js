const ApiModel = require("../models/ApiModel");
const pokemonfetch = require("../routes/PokemonsFetch");

module.exports = (app) => {
  app.get("/api/pokemons/randomizer", async (req, res, next) => {
    for (let i = 1; i <= 151; i++) {
      var shiny = null;
      var picture = Math.floor(Math.random() * 150) + 1;
      if (picture < 135) {
        picture =
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
          i +
          ".png";
        shiny = null;
      } else {
        picture =
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" +
          i +
          ".png";
        shiny = "Shiny !";
      }

      ApiModel.findOneAndUpdate(
        { id: i },
        { picture: picture, shiny: shiny }
      ).then(console.log("pokemon n°" + i + "updated"));
    }
    ApiModel.find({}).then((pokemons) => {
      res.json(pokemons);
    });
  });
};
