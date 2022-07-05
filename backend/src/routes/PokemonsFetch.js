const ApiModel = require("../models/ApiModel");
axios = require("axios");

// use axios to fetch pokemons from database

module.exports = (app) => {
  app.get("/api/pokemons/fetch", async (req, res) => {
    ApiModel.find({})
      .sort({ id: 1 })
      .then((pokemons) => {
        res.json(pokemons);
      });
  });
};
