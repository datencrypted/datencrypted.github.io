const ApiModel = require("../models/PokemonsModel");
// connect to mongodb and fetch one pokemon from url id
module.exports = (app) => {
  // app is an express instance
  app.get("/api/pokemon/:id", (req, res) => {
    ApiModel.find({ id: req.params.id })
      .then((pokemon) => {
        //function randomize shiny possibility
        var shiny = Math.floor(Math.random() * 100) + 1;
        if (shiny <= 1) {
          pokemon[0].shiny = true;
          pokemon[0].picture = pokemon[0].picture.replace(
            "pokemon",
            "pokemon/shiny"
          );
        } else {
          pokemon[0].shiny = false;
        }
        res.json(pokemon);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
